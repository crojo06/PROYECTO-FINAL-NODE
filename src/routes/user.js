const express = require("express");
const User = require("../models/user");

const router = express.Router();

// create a user
router.post("/users", (req, res) => {
    const newUser = new User(req.body);
    newUser.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/users", (req, res) => {
    User.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    User.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    User.updateOne({ _id: id }, { $set: { name, age, email }})
        .then(data => res.json(data)) 
        .catch(error => res.json({ message: error }));
});

//delete a user
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    User.deleteOne({ _id: id }) // Corregido de userSchema.delete.One a User.deleteOne
        .then(data => res.json(data)) // Corregido de (data) => res.json(data) a data => res.json(data)
        .catch(error => res.json({ message: error }));
});


module.exports = router;


