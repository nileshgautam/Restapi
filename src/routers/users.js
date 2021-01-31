const express = require("express");
const router = new express.Router();
const User = require("../model/users");


// Function to get data from users table in DB
router.get("/users", async (req, res) => {
    try {
        const getUsers = await User.find({});
        res.status(200).send(getUsers);
    } catch (e) {
        res.status(404).send(e);
    }
});

// Function to get data from users table by id in DB
router.get("/users/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getUser = await User.findById(_id);
        res.status(200).send(getUser);
    } catch (e) {
        res.status(404).send(e);
    }
});

// Function to insert data into the users table in DB
router.post("/users", async (req, res) => {
    try {
        const addingUserRecord = new User(req.body);
        console.log(req.body);
        const insert = await addingUserRecord.save();
        res.status(201).send(insert);
    } catch (e) {
        res.status(400).send(e);
    }

});

// Function to insert data into the users table in DB
router.patch("/users/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getUser = await User.findByIdAndUpdate(_id, req.body, { new: true });
        res.status(200).send(getUser);
    } catch (e) {
        res.status(500).send(e);
    }
});

// Function to insert data into the users table in DB
router.delete("/users/:id", async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).send(deleteUser);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;