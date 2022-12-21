const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
    User.findAll({
        attributes: ['username', 'email'] // hanya mengambil kolom username dan email
    }).then(users => {
        // JSON.stringify(value, replacer, space)
        // res.status(200).send(JSON.stringify(users, null, 2));
        res.status(200).send(users);
    });
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};