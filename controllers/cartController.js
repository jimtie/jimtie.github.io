const db = require('../models');

// get all cart contents for a profile at url/api/v1/profile/profile_id/favs
const index = (req, res) => {
    db.Profile.findById(req.params.profile_id, (err, foundProfile) => {
        if (err) {
            return res
                .status(400)
                .json({status: 400, error: 'Something went wrong, please try again.'});
        }
        if (foundProfile.cart) {
            let cartObjects = foundProfile.cart.map(toyId => db.Toys.findById(toyId));
            res.json(cartObjects);
        } else {
            res.status(404).end();
        }
    });
};

// add an item to the cart for a profile at url/api/v1/profile/profile_id/favs
const add = (req, res) => {

    db.Profile.findById(req.params.profile_id, (err, foundProfile) => {
        
        if (!foundProfile) {return res.status(404).json({status: 404, error: 'not found'})} 
        else if (err) {return res.status(400).json({status: 400, error: 'womp, try again'})}
        
        // add toy reference to profile's cart
        foundProfile.cart.push(req.body.toyId);
        // save profile
        foundProfile.save((err, savedProfile) => {
            if (err) {
                return res
                    .status(400)
                    .json({status: 400, error: 'Something went wrong, please try again.'});
            }
            console.log('saved');
            // respond with saved profile's cart objects
            // let cartObjects = savedProfile.cart.map(toyId => db.Toys.findById(toyId));
            res.json(savedProfile.populate('cart').cart);


        // // add toy id to profile's cart
        // db.Toy.findById(req.body.toyId, (err, foundToy) => {
        //     if (err) {
        //         return res
        //             .status(400)
        //             .json({status: 400, error: 'Something went wrong, please try again.'});
        //     }
        //     // add toy reference to profile's cart
        //     foundProfile.cart.push(foundToy);
        //     // save profile
        //     foundProfile.save((err, savedProfile) => {
        //         if (err) {
        //             return res
        //                 .status(400)
        //                 .json({status: 400, error: 'Something went wrong, please try again.'});
        //         }
        //         // respond with saved profile's cart objects
        //         // let cartObjects = savedProfile.cart.map(toyId => db.Toys.findById(toyId));
        //         res.json(savedProfile.populate('cart').cart);
        //     });
        });
    });
};

// delete an item from the cart for a profile at url/api/v1/profile/profile_id/favs
// router.delete('/profile/:profile_id/favs', ctrl.favsCtrl.remove);
const remove = (req, res) => {
    db.Profile.deleteOne(
        {_id: req.params.id},
        (err, deletedProfile) => {
            if (err) {
                return res
                    .status(400)
                    .json({status: 400, error: 'Something went wrong, please try again.'});
            }
        res.json(deletedProfile);
        });
}; // works

module.exports = {
    index,
    add,
    remove,
};