import Server from './classes/server';
import { SERVER_PORT } from './global/enviroments';
import router  from './routes/router';
import cors from 'cors';
import express from 'express';


const server = new Server();
server.app.use(express.urlencoded({ extended: true}));
server.app.use(express.json());

//cors
server.app.use( cors({origin: true, credentials: true}))
server.app.use('/', router);

server.start( () => {
    console.log(`El servidor esta corriendo en el puerto ${SERVER_PORT}`)
})