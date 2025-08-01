import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from 'cors';

const app = express();


app.use(cors()); // Enable CORS for all routes
dotenv.config();
app.use(express.json());// Middleware to parse JSON bodies

const PORT = process.env.PORT ;

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/BookData';
const MONGODB_URI = process.env.MONGODB_URI

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Uncomment this line if you have a user route



// connect to MongoDB IN TRY CATCH
try {
    mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


