const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
require('dotenv').config();

const config = {
    appUrl: process.env.APP_URL ? process.env.APP_URL : 'http://localhost:5173',
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

app.use(cors({
    origin: config.appUrl,
    credentials: true,
}));

app.use(bodyParser.json());

app.post('/login', async function (req, res) {
    const user = users.find((user) => user.username === req.body.username);

    if (user) {
        if (req.body.password === user.password) {
            res
                .status(200)
                .send();
            return;
        }
    } else {
        res
            .status(401)
            .send();
    }
});

app.listen(3000);
