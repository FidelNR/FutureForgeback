import User from '../models/user.model.js'
import Data from '../models/test.model.js'

export const login = async (req, res) => {
    const {nombre,edad,genero,ciudad,areaInteres,nivelEducativo,tipoTrabajo} = req.body

    try {
        const newUser = new User({
            nombre,
            edad,
            genero,
            ciudad,
            areaInteres,
            nivelEducativo,
            tipoTrabajo
        });

        const userSaved = await newUser.save();
        res.json({
            id: userSaved._id,
            nombre: userSaved.nombre,
            edad: userSaved.edad,
            genero: userSaved.genero,
            ciudad: userSaved.ciudad,
            areaInteres: userSaved.areaInteres,
            nivelEducativo: userSaved.nivelEducativo,
            tipoTrabajo: userSaved.tipoTrabajo,
        });
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const fill = async (req, res) => {
    const {vocacional,resultadovo,aprendizaje,resultadoapre} = req.body

    try {
        const newData = new Data({
            vocacional,
            resultadovo,
            aprendizaje,
            resultadoapre
        });

        const dataSaved = await newData.save();
        res.json({
            id: dataSaved._id,
            vocacional: dataSaved.vocacional,
            resultadovo: dataSaved.resultadovo,
            aprendizaje: dataSaved.aprendizaje,
            resultadoapre: dataSaved.resultadoapre
        });
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const dashboard = async (req, res) => {
    const data = await Data.find();
    res.json(data);
}

export const users = async (req, res) => {
    const data = await User.find();
    res.json(data);
}