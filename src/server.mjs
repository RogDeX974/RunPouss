
import http from "http";
import express from "express";
import fs from "node:fs";
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = 8080;


io.on('connection', (socket) => {
    console.log('Connexion au serveur établie');
    socket.on('disconnect'), () => {
        console.log("Déconnexion du serveur...");
    };
});

app.get('/', (req, res) => {
    res.send('La page a été récupérée !');
});

server.listen(port, () => {
    console.log(`Site Web accessible : http://localhost:${port}`);
});