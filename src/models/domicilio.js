const {user3, model} = require('mongoose');

const domicilio = new user1 ({
    numero: String,
    calle: String,
    cp: String
}, {
    timestamps: true
});

module.exports = model('user3', domicilio);