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
// - Les différentes routes possibles
app.use(homeRouter);
app.use('/dest', destRouter);
// - L'erreur 404 si aucune route validé
app.all('**', (req, res) => res.render('errors/not-found'));

// Le middleware de gestion d'erreur
app.use((error, req, res, next) => {
    // TODO : Ajouter l'erreur dans un logger (fichier, db, ...)

    // Page d'erreur pour l'utilisateur final
    if(NODE_ENV !== 'dev') {
        res.render('errors/server');
        return;
    }

    // Relance l'erreur (possibilité, à la place, de créer une page erreur custom)
    throw error;
});

// Démarrage du server
const { PORT, NODE_ENV } = process.env;
const logColor = chalk.rgb(30, 250, 60);

app.listen(PORT, () => {
    console.log(logColor(`WebServer is running on port ${PORT} [${NODE_ENV}]`));
});