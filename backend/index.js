import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from 'cors';

const app = express();


app.use(cors()); // Enable CORS for all routes


dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());

const PORT = process.env.PORT || 4000;

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/BookData';

const MONGODB_URI = process.env.MONGODB_URI

// defining routes

app.use("/book", bookRoute);
app.use("/user", userRoute);

// Uncomment this line if you have a user route



// connect to MongoDB IN TRY CATCH
mongoose.connect(MONGODB_URI)
  .then(() => console.log(' Connected to MongoDB'))
  .catch((err) => console.error(' MongoDB connection error:', err));


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
