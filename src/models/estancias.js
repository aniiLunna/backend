const {user7, model} = require('mongoose');

const Estancias = new user7 ({
    institucion:string,
    proyecto:string,
    fecha:string,
    termino:string
}, {
    timestamps: true
});

module.exports = model('user', Estancias);