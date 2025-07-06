import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js';
import UsuarioRouter from './routes/UsuarioRoutes.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(express.json());

//PARA VER EL CONTENIDO DE SWAGGER HAY QUE ENTRAR A http://localhost:3000/api-docs/
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// app.use("/api", Vehiculorouter);
app.use('/api', UsuarioRouter);

export default app;