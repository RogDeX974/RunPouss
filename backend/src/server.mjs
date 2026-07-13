
// Express
import http from "http";
import { dirname, join } from "path";
import express from "express";
import fs from "node:fs";
import { Server } from 'socket.io';
import { fileURLToPath } from "url";


// Import des informations sur la base de données PostgreSQL
import db from'./db.js';


/* Récupération des variables d'environnement (dotenv)
import dotenv from 'dotenv';
dotenv.config();
*
*
*/


/* UNUSED ! Webpack Middleware (webpack-dev-server) : https://dev.to/riversun/how-to-run-webpack-dev-server-on-express-5ei9
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../../webpack.config.mjs';

const devServerEnabled = true;
*
*
*/




// Application Express
const app = express();
const router = express.Router();
const server = http.createServer(app);
const io = new Server(server);

const port = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DIST_DIR = join(__dirname, '../../dist');
const HTML_FILE = join(DIST_DIR, 'index.html');


const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};



io.on('connection', (socket) => {
    console.log('Connexion au serveur établie');
    socket.on('disconnect'), () => {
        console.log("Déconnexion du serveur...");
    };
});


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static(DIST_DIR));

/*app.get('/api', (req, res) => {
    res.send(mockResponse);
});*/





app.get('/api/motos', async (req, res) => {

    console.log("Tout va bien sur Terre!");
    try {
        const result = await db.query('SELECT * from test_motos');
        console.log("Le test a fonctionné ! Voici le résultat : ", result.rows);
        res.json(result.rows);
    } catch (err) {
        console.log(err);
        res.status(500).send('Erreur du serveur en récupérant les données !');
    }
});







app.get('/error', (req, res) => {
    res.send('Une erreur est survenue !');
})

app.get('/login', (req, res) => {
    res.send("Page de login");
})




app.get(/(.*)/, (req, res) => {
    res.sendFile(HTML_FILE);
    //res.render();
    //res.sendStatus(200);
    /*res.status(200).send("Bonjour depuis le serveur !");*/
});



server.listen(port, () => {
    console.log(`
|---------------------------------------------|
| Site Web accessible : http://localhost:${port} |
|---------------------------------------------|`);
});