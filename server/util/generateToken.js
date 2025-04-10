const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const token = jwt.sign(
        { email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );
    return token;
}

module.exports = generateToken;