const {user9, model} = require('mongoose');

const ImplementacionTecnologica = new user9 ({
    tipo:string,
    nombre:string,
    numero:string,
    fecha:string
}, {
    timestamps: true
});

module.exports = model('user', ImplementacionTecnologica);