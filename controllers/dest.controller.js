const destController = {

    index: (req, res) => {
        // La liste des destinations

        res.render('dest/index');
    },
    
    detail: (req, res) => {
        // Le detail d'une destination

        res.render('dest/detail');
    }
};

module.exports = destController;