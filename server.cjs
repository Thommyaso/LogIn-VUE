const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const session = require('express-session');
require('dotenv').config();

const hashPassword = async (pw) => {
    let password = null;

    await bcrypt.genSalt(10)
        .then(async (salt) => {
            await bcrypt.hash(pw, salt).catch((err) => console.error(err))
                .then((pass) => {
                    password = pass;
                })
                .catch((err) => {
                    console.error(err);
                });
        })
        .catch((err) => {
            console.error(err);
        });
    if (password) {
        return password;
    }
    console.error('Failed to generate hashed password');
};

const logIn = async (pw, hashedPw) => {
    return await bcrypt.compare(pw, hashedPw)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.error(err);
            console.error('failed to compare passwords');
            return false;
        });
};

const config = {
    appUrl: process.env.APP_URL ?? 'http://localhost:5173',
    sessionSecret: process.env.SESSION_SECRET ?? 'f4db803b-cdcd-4f28-833d-3936c7925700',
    sessionExpiryTime: process.env.SESSION_EXPIRATION_TIME ? parseInt(process.env.SESSION_EXPIRATION_TIME) : 300000,

};

const users = [
    /*

        Users will be added here.
        Each user will be stored as an individual object.
        Sotred passwords will be hashed and salted using bcrypt
        Example:

            {
                username: 'Jesse01',
                password: '$2b$10$phdxe7Pr2ZrDRK7N/rOfvuStYLmSqggQ1upagGIv2.B7S3od13NK.',
                name: 'Jesse',
                surname: 'James',
                age: 28
            },

    */
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
        res.status(409)
            .send();
        return;
    }

    const hashedPassword = await hashPassword(req.body.password);
    if (hashedPassword) {
        const newUser = {
            username: req.body.username,
            password: hashedPassword,
            name: req.body.name,
            surname: req.body.surname,
            age: req.body.age,
        };
        users.push(newUser);
        res
            .status(200)
            .send();
        return;
    }
    console.error('failed to set up the password');
    res
        .status(500)
        .send();
});

app.post('/login', async function (req, res) {
    const user = users.find((user) => user.username === req.body.username);

    if (user) {
        const isMatched = await logIn(req.body.password, user.password);
        if (isMatched) {
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
    }

    req.session.destroy();
    res
        .clearCookie('connect.sid', {path: '/'})
        .status(401)
        .send();
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
