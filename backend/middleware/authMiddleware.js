const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

    try {

        const token = req.header("Authorization");

        if (!token) {

            return res.json({
                message: "No Token"
            });

        }

        const verified = jwt.verify(token, "secretkey");

        req.user = verified;

        next();

    } catch (error) {

        res.json({
            message: "Invalid Token"
        });

    }

};

module.exports = authMiddleware;