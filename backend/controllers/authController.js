const User = require("../models/User");

const registerUser = async (req, res) => {

    try {

        const user = new User(req.body);

        await user.save();

        res.json({
            message: "User Registered"
        });

    } catch (error) {

        res.json(error);

    }

};

const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.json({
                message: "User Not Found"
            });

        }

        if (user.password !== password) {

            return res.json({
                message: "Invalid Password"
            });

        }

        res.json({
            message: "Login Successful"
        });

    } catch (error) {

        res.json(error);

    }

};

module.exports = {
    registerUser,
    loginUser
};