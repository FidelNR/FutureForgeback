import mongoose from "mongoose";

const testData = new mongoose.Schema({
    vocacional: {
        type: String,
        required: true,
    },
    resultadovo: {
        type: Number,
        required: true,
    },
    aprendizaje: {
        type: String,
        required: true,
    },
    resultadoapre: {
        type: Number,
        required: true,
    }
})

export default mongoose.model('Data', testData)