const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcrypt');

// get all users
router.get('/', async(req, res) => {
    const allUsers = await User.find();
    console.log(allUsers);
    res.send(allUsers);
});

// post one user
router.post('/', async(req, res) => {
    const saltRounds = 10;
    let pwHash = '';
    await bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (errHash, hash) => {
            pwHash = hash;
            const newUser = new User({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: pwHash,
                role: req.body.role
            });
            console.log('newUser', newUser);
            newUser.save();
            res.send(newUser);
        });
    });

});

// get one user via email and password
router.post('/login/:email', async(req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        let sendPw = req.body.password;
        let userPW = user.password;
        bcrypt.compare(sendPw, userPW, (err, result) => {
            if (result) {
                console.log('Passwort korekt!');
                res.send(user);
            } else {
                console.log('falsches Passwort!');
                res.status(403);
                res.send({
                    error: "Wrong password!"
                });
            }
        });
    } catch {
        res.status(404);
        res.send({
            error: "User does not exist!"
        });
    }
});

// get one user via id
router.get('/:id', async(req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        console.log(req.params);
        res.send(user);
    } catch {
        res.status(404);
        res.send({
            error: "User does not exist!"
        });
    }
});

// update one user via email
router.patch('/:email', async(req, res) => {
    try {
        const user = await User.findOne({ username: req.params.email })

        if (req.body.email) {
            user.email = req.body.email
        }

        if (req.body.password) {
            user.password = req.body.password
        }

        if (req.body.role) {
            user.role = req.body.role
        }

        await User.updateOne({ email: req.params.email }, user);
        res.send(user)
    } catch {
        res.status(404)
        res.send({ error: "User does not exist!" })
    }
});

// delete one user via id
router.delete('/:id', async(req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "User does not exist!" })
    }
});

module.exports = router;
