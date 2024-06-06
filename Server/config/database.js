import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed");
        console.error(error);
        process.exit(1);
    }
}

export default connect;
