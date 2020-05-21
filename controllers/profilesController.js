const db = require('../models');

// get all user profiles at url/api/v1/profiles
// get all profiles by zipcode at url/api/v1/profiles?zipcode=00000

const index = (req, res) => {
    if (req.query.zipcode) {
        db.Profile.find({zipcode: req.query.zipcode}, (err, zipcodeProfiles) => {
            if(err) {
                return res
                    .status(400)
                    .json({status: 400, error: 'Something went wrong, please try again.'});
            }
            res.json(zipcodeProfiles);
        });
    } else if (req.query.email) {
        db.Profile.find({email: req.query.email}, (err, profile) => {
            if(err) {
                return res
                    .status(400)
                    .json({status: 400, error: 'Something went wrong, please try again.'});
            }
            res.send(profile[0]._id);
        });
    } else {
        db.Profile.find({}, (err, allProfiles) => {
            if(err) {
                return res
                    .status(400)
                    .json({status: 400, error: 'Something went wrong, please try again.'});
            }
            res.json(allProfiles);
        });
    }
}; // works

// create new user profile at url/api/v1/profiles

const create = (req, res) => {
    db.Profile.create(req.body, (err, newProfile) => {
        if(err) {
            return res
                .status(400)
                .json({status: 400, error: 'Something went wrong, please try again.'});
        }
        res.status(201).json(newProfile);
    });
}; // works

// get user profile at url/api/v1/profile/id

const show = (req, res) => {
    const profileID = req.params.id;
    db.Profile.findById(profileID, (err, foundProfile) => {
        if (err) {
            return res
                .status(400)
                .json({status: 400, error: 'Something went wrong, please try again.'});
        }
        res.json(foundProfile);
    });
}; // works

// update user profile at url/api/v1/profile/id

const update = (req, res) => {
    db.Profile.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true},
        (err, updatedProfile) => {
            if (err) {
                return res
                    .status(400)
                    .json({status: 400, error: 'Something went wrong, please try again.'});
            }
        res.json(updatedProfile);
    });
}; // works

// delete user profile at url/api/v1/profile/id

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
    create,
    show,
    update,
    remove,
};