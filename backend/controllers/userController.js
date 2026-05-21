const User = require('../models/User'); 

// 1. Register Function
exports.registerUser = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        const userExists = await User.findOne({ $or: [{ email }, { phone }] });
        if (userExists) {
            return res.status(400).json({ message: "Email ya Phone pehle se registered hai bhai!" });
        }

        const newUser = await User.create({ name, email, phone, password });

        res.status(201).json({
            message: "User mast register ho gaya!",
            user: { id: newUser._id, name: newUser.name, email: newUser.email, phone: newUser.phone }
        });
    } catch (error) {
        res.status(500).json({ message: "Server mein kuch phat gaya", error: error.message });
    }
};

// 2. Login Function
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(404).json({ message: "Bhai yeh email toh register hi nahi hai. Pehle account banao!" });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: "Password galat hai mere bhai, wapas try kar!" });
        }

        res.status(200).json({
            message: "Login ekdum successful! Welcome back.",
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch (error) {
        res.status(500).json({ message: "Server mein kuch gadbad hai", error: error.message });
    }
};