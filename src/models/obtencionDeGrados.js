const {user11, model} = require('mongoose');

const obtencionDeGrados = new user11 ({
    nombre:string,
    institucion:string
}, {
    timestamps: true
});

module.exports = model('user', obtencionDeGrados);