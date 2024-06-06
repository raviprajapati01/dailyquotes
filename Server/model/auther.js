import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    name: String,
    auotes: String
})

const Auth = mongoose.model("quotes", authSchema);

export default Auth;