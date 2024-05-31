import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://fidel:123@cluster0.kvqbkhv.mongodb.net/futureforge?retryWrites=true&w=majority')
        console.log(">>> DB is connected")
    } catch (error) {
        console.log(error);
    }
};