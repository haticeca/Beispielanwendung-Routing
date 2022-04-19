const express = require('express');
const router = express.Router();
const Member = require('../models/members');

// eine GET-Anfrage
router.get('/', async(req, res) => {

  res.send({ message: "Hello FIW!" });
});

// get all members
router.get('/members', async(req, res) => {
    const allMembers = await Member.find();
    console.log(allMembers);
    res.send(allMembers);
});

// post one member
router.post('/members', async(req, res) => {
    const newMember = new Member({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    })
    await newMember.save();
    res.send(newMember);
});

// post one member via id
router.get('/members/:id', async(req, res) => {
    try {
        const member = await Member.findOne({ _id: req.params.id });
        console.log(req.params);
        res.send(member);
    } catch {
        res.status(404);
        res.send({
            error: "Member does not exist!"
        });
    }
})

// update one member
router.patch('/members/:id', async(req, res) => {
    try {
        const member = await Member.findOne({ _id: req.params.id })

        if (req.body.firstname) {
            member.firstname = req.body.firstname
        }

        if (req.body.lastname) {
            member.lastname = req.body.lastname
        }

        if (req.body.email) {
            member.email = req.body.email
        }

        await Member.updateOne({ _id: req.params.id }, member);
        res.send(member)
    } catch {
        res.status(404)
        res.send({ error: "Member does not exist!" })
    }
});

// delete one member via id
router.delete('/members/:id', async(req, res) => {
    try {
        await Member.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Member does not exist!" })
    }
});

module.exports = router;
