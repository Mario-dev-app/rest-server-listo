import Server from "./classes/server";
import { SERVER_PORT } from "./global/environment";
import router  from "./routes/router";
import express from 'express';
import cors from 'cors';

const server = new Server();

//BodyParser
server.app.use(express.urlencoded({extended: true}));
server.app.use(express.json());

//CORS
server.app.use(cors({origin: true, credentials: true}));

//Rutas de servicios
server.app.use('/', router);

server.start(() => {
    console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`);
});