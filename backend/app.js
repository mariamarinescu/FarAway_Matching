require('dotenv').config()

const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const authRouter = require('./route/auth/auth');
const connection = require('./helpers/db');

const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// app.get("/", (req,res) => {
//     res.send("youhou");
// })

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        session: false
    },
    function (email, password, cb) {
        connection.query(`SELECT * from users WHERE email="${email}"`, (err, user) => {

            if (err) { return cb(err); }
            if (!user) { return cb(null, false, { message: 'Incorrect email or password!' }) }
            let isSame = bcrypt.compareSync(password, user[0].password)
            if (!isSame) { return cb(null, false, { message: 'Incorrect password!' }) }
            return cb(null, user[0])
        })
    }

));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_jwt_secret'
},
    function (jwtPayload, cb) {
        return cb(null, jwtPayload);
    }
));


app.use('/auth', authRouter);

app.get("/profile", passport.authenticate('jwt', { session: false }), function (req, res) {
    res.send(req.user);
})

/// in case path is not found, return the 'Not Found' 404 code
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// launch the node server
let server = app.listen(process.env.PORT || 5000, function () {
    console.log('Listening on port ' + server.address().port);
});