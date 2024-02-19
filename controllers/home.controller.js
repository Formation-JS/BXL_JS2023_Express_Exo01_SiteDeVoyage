const chalk = require("chalk");

const homeController = {

    index: (req, res) => {
        // La page d'accueil

        res.render('home/index');
    },
    
    contact: (req, res) => {
        // La page de contact

        res.render('home/contact');
    },

    contact_POST: (req, res) => {
        // Le traitement de la reception des données de la page de contact
        const data= req.body;

        // - Validation des données
        const error = {};
        let onError = false;
        if(!data.email) {
            error.email = 'L\'email est invalide !';
            onError = true;
        }
        if(!data.category || !['1', '2', '3', '4'].includes(data.category)) {
            error.category = 'La catégorie est invalide !';
            onError = true;
        }
        if(!data.message || data.message.length < 10) {
            error.message = 'Le message doit faire minimum 10 caracteres !';
            onError = true;
        }

        if(onError) {
            res.render('home/contact', { error });
            return;
        }

        // - Traitement avec les données validées
        console.log(chalk.cyan('Données de formulaire réçu'), data);

        // - Redirection vers la page de confirmation
        res.redirect('/contact/confirm');
    },

    confirm : (req, res) => {
        // La page de confirmation du formulaire de contact
        res.render('home/confirm');
    }
};

module.exports = homeController;