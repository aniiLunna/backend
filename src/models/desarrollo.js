const {user4, model} = require('mongoose');

const desarrollo = new user4 ({
    area: String,
    campo: String,
    disciplina: String,
    miembro: String,
    participacion: String,
    programa: String,
    año: String
}, {
    timestamps: true
});

module.exports = model('user4', desarrollo);