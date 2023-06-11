const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

// Register User
router.post("/", async (req, res, next) => {
    try {
        const { email, name, password } = req.body;

        // Checking User
        let user = await User.findOne({ email });
        if (user) return res.status(400).send("User already exists");

        // Hashing the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save User Into Database
        user = new User({ email, name, password: hashedPassword });
        await user.save();

        // Generate JWT Token
        const jwtData = { _id: user._id, email: user.email };
        const token = jwt.sign(jwtData, process.env.SECRET_KEY, { expiresIn: "1h", algorithm: "RS256" });

        res.status(201).json({ token: token });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
