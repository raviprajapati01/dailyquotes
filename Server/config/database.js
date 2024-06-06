import mongoose from "mongoose";

function connect(){
    // const MongoUrl = process.env.MONGODB_URL
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Database connect successfully")
    }).catch((error)=>{
        console.log("Database connection failed");
        console.error(error);
        process.exit(1);
    })
}

export default connect;