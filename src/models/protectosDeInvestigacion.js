const {user16, model} = require('mongoose');

const informacionAcademica = new user16 ({
    referencia:string,
    titulo:string,
    particion:string,
    fecha:string,
    termino:string,
    institucion:string,
    asociaciones:string,
    monto:string,
    usuario:string

}, {
    timestamps: true
});

module.exports = model('user', informacionAcademica);