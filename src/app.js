import express from 'express'
import morgan from 'morgan';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js'

const app = express();

app.use(morgan('dev'));
app.use(express.json())

const corsOptions = {
    //origin: 'http://localhost:5173', // URL desde la cual se permitirán las solicitudes
    //origin: 'exp://localhost:8081', // URL desde la cual se permitirán las solicitudes
    methods: ['GET', 'POST'], // Métodos HTTP permitidos
    optionsSuccessStatus: 200 // Código de estado para respuestas OPTIONS exitosas
  };

app.use(cors(corsOptions)); // Habilitar CORS para todas las solicitudes

app.use("/api",authRoutes)

export default app;