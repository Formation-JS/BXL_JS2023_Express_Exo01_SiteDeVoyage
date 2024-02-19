const mockup = require('./mockups/japon.json');

const destController = {

    index: (req, res) => {
        // La liste des destinations
        const destinations = mockup.map(data => {
            return {
                name: data.name,
                desc: data.shortDescription,
                imgUrl: `/public/images/thumbnails/${data.thumbnail}`,
                detailUrl: `/dest/${data.id}`
            };
        })
        // const destinations = mockup.map(data => ({ ... }))

        const viewData = {
            destinations
        };
        res.render('dest/index', viewData);
    },
    
    detail: (req, res) => {
        // Le detail d'une destination
        // - Récuperation de l'id depuis la route
        const id = parseInt(req.params.id);

        // - Obtenir l'element ciblé
        const dest = mockup.find((elem) => elem.id === id);

        if(!dest) {
            res.redirect('/dest/not-found');
            return;
        }

        const viewData = {
            name: dest.name,
            location: dest.location,
            imgUrl: `/public/images/destinations/${dest.image}`,
            desc: dest.description,
            price: dest.price,
            duration: dest.duration
        };
        res.render('dest/detail', viewData);
    },

    errorNotFound: (req, res) => {
        res.render('dest/not-found');
    } 
};

module.exports = destController;