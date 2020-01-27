var express = require('express');
var router = express.Router();
const connection = require('../../helpers/db');
const bcrypt = require('bcrypt');
const passport = require('passport');

const jwt = require('jsonwebtoken');



router.post('/signin', function(req, res) {
  passport.authenticate('local',(err, user, info) => {
    if(err) return res.status(500).send(err)
    if (!user) return res.status(400).json({flash: info.message});
    const token = jwt.sign({user}, 'your_jwt_secret');
    return res.json({user, token, flash:'Sign in succesful!'});
 })(req, res)
});


// router.post('/signup', function(req, res, next) {
//     res.send('I am in POST signup');
//   });


//Create users 
router.post('/signup', (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, 10);
    // this is a const that changes the user's inputs into something right for database
    let usersData={
        email: req.body.email,
        password: hash,
        name: req.body.firstName,
        lastname: req.body.lastName
    };
    console.log(usersData)
     
    connection.query('INSERT INTO users SET ?', usersData, (error,results, fields) => {
      console.log(error)
        if (error)
          res.status(500).json({ flash:  "E-mail already exist!" });
           else
          res.status(200).json({ flash:  "User has been signed up!" })
        });
    });

module.exports = router;