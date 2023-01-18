const {user10, model} = require('mongoose');

const libros = new user10 ({
    titulo: string,
    autor: string,
    editorial: string,
    referencia: string
}, {
    timestamps: true
});

module.exports = model('user', libros);