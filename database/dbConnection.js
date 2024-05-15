import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: 'MERN_STACK_JOB'
    }).then(()=>{
        console.log("Connected to database!")
    }).catch((err)=>{
        console.log(`Some error occured. ${err}`)
    });
};