const {user12, model} = require('mongoose');

const patentes = new user12 ({
    tipo: string,
    nombre: string,
    registro:string,
    fecha:string,
    referencia:string
}, {
    timestamps: true
});

module.exports = model('user', patentes);