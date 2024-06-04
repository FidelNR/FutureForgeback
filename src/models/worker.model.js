import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    usuario: {
        type: String,
        required: true,
    },
    contrasena: {
        type: String,
        required: true,
    },
})

export default mongoose.model('Worker', workerSchema)