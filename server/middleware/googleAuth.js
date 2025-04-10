const User = require('../model/user.model.js');
const generateToken = require('../util/generateToken.js');

const googleAuth = async (req, res, next) => {
    try {
        const finderUser = await User.findOne({ email: req.user?._json?.email });
        let savedUser;
        if (!finderUser) {
            const newUser = await User.create({
                name: req.user?._json?.name,
                email: req.user?._json?.email,
            });
            savedUser = await newUser.save();
        }
        const token = generateToken(finderUser ? finderUser : savedUser);
        res.cookie('token', token, { 
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        });
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = googleAuth;