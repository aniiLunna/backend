const {user5, model} = require('mongoose');

const nacimiento = new user5 ({
    cp: string,
    pais: string,
    estado: string,
    ciudad: string,
    nacimiento: string,
    extranjero: string,
}, {
    timestamps: true
});

module.exports = model('user5', nacimiento);