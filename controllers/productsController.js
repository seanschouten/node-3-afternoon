module.exports = {
    create: ( req, res, next ) => {
        const db = req.app.get('db');
        const { name, description, price, image_url} = req.body;
        db.createProduct([ name, description, price, image_url ])
            .then( () => res.sendStatus(200).send( product ) )
            .catch( err => {res.status(500).send({errorMEssage: 'OOPS!'});
            console.log(err)
        });
    },

    getOne: (req, res, next ) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.readProduct()
            .then( product => res.status(200).send( product ))
            .catch( err => { res.status(500).send({errorMessage: 'OOPS!'});
            console.log(err)
        });
    },

    getAll: ( req, res, next ) => {
        const db = req.app.get('db');
        db.readProducts()
            .then( products => res.status(200).send( products ) )
            .cath( err=> { res.status(500).send({errorMessage: 'OOPS!'});
            console.log(err)
            });
    },

    update: ( req, res, next ) => {
        const db = req.app.get('db');
        const { params, query } = req;

        db.updateProduct()
            .then( () => res.sendStatus(200) )
            .catch( err => {res.status(500).send({errorMessage: 'OOPS!'});
            console.log(err)
        });
    },

    delete: ( req, res, next ) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.deleteProduct()
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessge: 'OOPS!'});
            console.log(err)
        });
    }
}