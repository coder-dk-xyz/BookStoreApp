import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from "./route/book.route.js";
import cors from 'cors';  

const app = express();


app.use(cors()); // Enable CORS for all routes


dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 4000;

const MONGODB_URI= process.env.MONGODB_URI || 'mongodb://localhost:27017/BookData';

// defining routes

app.use("/book", bookRoute);



// connect to MongoDB IN TRY CATCH
try {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Connected to MongoDB');
} catch (error) {
  console.error('Error connecting to MongoDB:', error);
} 

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
