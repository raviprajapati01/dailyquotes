import authModel from '../model/auther.js'

export const getQuote =async (req,res)=>{
    try{
        const quote =await authModel.find();
        res.status(200).json(quote);
    }catch(error){
        console.log(error);
        res.status(400).json({
            message: "quotes not found from request.body"
        })
    }
}