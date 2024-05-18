import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: 'MERN_STACK_JOB',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000,
    }).then(()=>{
        console.log("Connected to database!")
    }).catch((err)=>{
        console.log(`Some error occured. ${err}`)
    });
};