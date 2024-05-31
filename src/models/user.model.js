import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: String,
        required: true,
    },
    genero: {
        type: String,
        required: true,
    },
    ciudad: {
        type: String,
        required: true,
    },
    areaInteres: {
        type: String,
        required: true,
    },
    nivelEducativo: {
        type: String,
        required: true,
    },
    tipoTrabajo: {
        type: String,
        required: true,
    }
})

export default mongoose.model('User', userSchema)