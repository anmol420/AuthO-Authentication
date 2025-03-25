import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (user) => {
    return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" })
};

const authCallback = (req, res) => {
    const token = generateToken(req.user);
    res.redirect(`${process.env.FRONTEND_URL}/dashboard?token=${token}`)
};

const register = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await User.create({ email, password: hashedPassword });
        res.status(201).json({ message: "User registered successfully!" });
    } catch (err) {
        res.status(400).json({ error: "Email already exists" });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = generateToken(user);
    res.cookie("token", token, { httpOnly: true }).json({ user });
};

const logout = (req, res) => {
    res.clearCookie("token").json({ message: "Logged out" });
};

const getProfile = (req, res) => {
    res.json({ user: req.user });
};

export { authCallback, register, login, logout, getProfile };