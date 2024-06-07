// Importing required modules
import mongoose from "mongoose";
import dotenv from 'dotenv';

// Configure dotenv to load environment variables
dotenv.config();

// Extracting MongoDB connection URL from environment variables
const { MONGODB_URL } = process.env;

// Function to establish MongoDB connection
const database = async () => {
    try {
        // Connecting to MongoDB using Mongoose
        await mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true, // Parse connection string using the new parser
            useUnifiedTopology: true // Use new Server Discovery and Monitoring engine
        });
        console.log("DB Connection Success");
    } catch (err) {
        console.log("DB Connection Failed");
        console.error(err); // Logging the error
        process.exit(1); // Exiting the process with exit code 1
    }
};

// Exporting the connect function
export default database;
