const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();

const config = {
    appUrl: process.env.APP_URL ? process.env.APP_URL : 'http://localhost:5173',
    sessionSecret: process.env.SESSION_SECRET ? process.env.SESSION_SECRET : 'f4db803b-cdcd-4f28-833d-3936c7925700',
    sessionExpiryTime: process.env.SESSION_EXPIRATION_TIME ? parseInt(process.env.SESSION_EXPIRATION_TIME) : 300000,

};

const users = [
    {
        username: 'Jesse01',
        password: 'abcd',
        name: 'Jesse',
        surname: 'James',
        age: 28,
    },
];

app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: config.sessionExpiryTime},
}));

app.use(cors({
    origin: config.appUrl,
    credentials: true,
}));

app.use(bodyParser.json());

app.use(bodyParser.json());

app.post('/register', async function (req, res) {
    const user = users.find((user) => user.username === req.body.username);

    if (user) {
        res.status(409);
        res.send();
        return;
    }

    const newUser = {
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
    };

    req.session.user = {
        username: req.body.username,
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
    };

    users.push(newUser);
    res
        .status(200)
        .send();
});

app.post('/login', function (req, res) {
    const user = users.find((user) => user.username === req.body.username);

    if (user) {
        if (req.body.password === user.password) {
            const {name, surname, username, age} = user;

            req.session.user = {
                name: name,
                surname: surname,
                username: username,
                age: age,
            };
            res
                .status(200)
                .send();
            return;
        }
    } else {
        req.session.destroy();
        res
            .clearCookie('connect.sid', {path: '/'})
            .status(401)
            .send();
    }
});

app.post('/userprofile', function (req, res) {
    if (req.session && req.session.user) {
        const {name, surname, username, age} = req.session.user;

        res.status(200);
        res.send({
            name: name,
            surname: surname,
            username: username,
            age: age,
        });
    } else {
        req.session.destroy();
        res
            .clearCookie('connect.sid', {path: '/'})
            .status(401)
            .send();
    }
});

app.get('/logout', function (req, res) {
    req.session.destroy();
    res
        .clearCookie('connect.sid', {path: '/'})
        .status(200)
        .send();
});

app.listen(3000);
