const { Router } = require("express");
const req = require("express/lib/request");
const jwt = require('jsonwebtoken');

const router = Router();

const User = require('../models/user');

router.get('/', (req, res) => res.send("Coveicydet"))

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password});
    await newUser.save();
    
    const token = jwt.sign({_id: newUser._id}, 'secretKey');

    res.status(200).json({token});

})

router.post('/signin', async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if(!user) return res.status(401).send("The email doesn't exist");
    if(user.password !== password) return res.status(401).send("Wrong Password");

    const token = jwt.sign({ _id: user._id }, 'secretKey');
    return res.status(200).json({ token });

});

router.get('/tasks', (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'task one',
            description: 'lorem ipsum',
            date: '2019-11-17T20:39:05.211Z'
        },
        {
            _id: 2,
            name: 'task two',
            description: 'lorem ipsum',
            date: '2019-11-17T20:39:05.211Z'
        },
        {
            _id: 3,
            name: 'task three',
            description: 'lorem ipsum',
            date: '2019-11-17T20:39:05.211Z'
        },
    ])
});

router.get('/private-task', verifyToken, (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'task one',
            description: 'lorem ipsum',
            date: '2019-11-17T20:39:05.211Z'
        },
        {
            _id: 2,
            name: 'task two',
            description: 'lorem ipsum',
            date: '2019-11-17T20:39:05.211Z'
        },
        {
            _id: 3,
            name: 'task three',
            description: 'lorem ipsum',
            date: '2019-11-17T20:39:05.211Z'
        },
    ])
})

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
        return res.status(401).send('Unauthorize request');
    }
    const token = req.headers.authorization.split(' ')[1]
    if(token == null) {
        return res.status(401).send('Unauthorize request');
    }

    const payload = jwt.verify(token, 'secretKey');

    req.userId = payload._id
    next();
}

module.exports = router;