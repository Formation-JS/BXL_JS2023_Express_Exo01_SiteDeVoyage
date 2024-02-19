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

        res.sendStatus(501);
    }
};

module.exports = homeController;