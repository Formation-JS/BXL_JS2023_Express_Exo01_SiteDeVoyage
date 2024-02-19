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
        const id = req.params.id;
        console.log(`Detail : ${id} ${typeof id}`);

        res.render('dest/detail');
    }
};

module.exports = destController;