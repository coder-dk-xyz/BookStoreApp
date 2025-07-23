import User from '../model/user.model.js';
import bcryptjs from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// Register a new user  
export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        const isUserExist = await User.findOne({ email });
        if (isUserExist) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = bcryptjs.hash(password, 10);
        if (!hashedPassword) {
            return { status: 500, message: "Error hashing password" };
        }

        // Create a new user with the hashed password
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashedPassword
        });
        await createdUser.save()
        console.log("User created successfully:", createdUser);

        res.status(201).json({ message: "User created successfully" })
    } catch (error) {
        console.error("Error in signup:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Login a user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordCorrect = await bcryptjs.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "password is incorrect " });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email
                    
            }
        });
    } catch (error) {
        console.error("Error in login:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}