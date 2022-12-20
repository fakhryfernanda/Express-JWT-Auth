const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => { // then digunakan sebagai promise
        if (user) {
            res.status(400).send({
                message: "Failed! Username is already in use!"
            });
            return;
        }
    });

    // Email
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Failed! Email is already in use!"
            });
            return;
        }

    });

    next();
};

// jika user bisa memiliki lebih dari satu role
// checkRolesExisted = (req, res, next) => {
//     // ambil roles dari request, periksa apakah semuanya ada
//     if (req.body.roles) {
//         for (let i = 0; i < req.body.roles.length; i++) {
//             if (!ROLES.includes(req.body.roles[i])) {
//                 res.status(400).send({
//                     message: "Failed! Role does not exist = " + req.body.roles[i]
//                 });
//                 return;
//             }
//         }
//     }
  
//     next();
// };

checkRolesExisted = (req, res, next) => {
    // ambil roles dari request, periksa apakah semuanya ada
    if (req.body.role) {
        if (!ROLES.includes(req.body.role)) {
            res.status(400).send({
                message: "Failed! Role does not exist = " + req.body.role
            });
            return;
        }
    }
  
    next();
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
    checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;