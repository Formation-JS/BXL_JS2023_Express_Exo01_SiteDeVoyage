require('dotenv').config();

// Imports
const express = require('express');
const chalk = require('chalk');
const homeRouter = require('./routes/home.router');
const destRouter = require('./routes/dest.router');

// Création du WebServer
const app = express();

// Configuration du moteur de vue (Necessaire dans un WebServer)
app.set('view engine', 'ejs');
app.set('views', './views');

// Middlewares
// - Gestion des fichiers "public"
app.use('/public', express.static('./public'));
// - Gestion des formulaires
app.use(express.urlencoded({ extended: true }));

// Import des routers
app.use(homeRouter);
app.use('/dest', destRouter);

// Démarrage du server
const { PORT, NODE_ENV } = process.env;
const logColor = chalk.rgb(30, 250, 60);

app.listen(PORT, () => {
    console.log(logColor(`WebServer is running on port ${PORT} [${NODE_ENV}]`));
});