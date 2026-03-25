
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
    res.sendFile(join(__dirname, "./src/App.js"));
});

app.get('/error', (req, res) => {
    res.send('Une erreur est survenue !');
})


server.listen(port, () => {
    console.log(`Site Web accessible : http://localhost:${port}`);
});