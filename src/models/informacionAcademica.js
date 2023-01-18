const {user15, model} = require('mongoose');

const informacionAcademica = new user15 ({
    nivel: string,
    titulo: string,
    institucion: string,
    año: string

}, {
    timestamps: true
});

module.exports = model('user', informacionAcademica);