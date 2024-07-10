import mongoose from "mongoose";

const connectMongo = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log('Error connecting to mongodb: ' + error.message);
        throw new Error(error);
    }
}

export default connectMongo