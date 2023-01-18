const {user1, model} = require('mongoose');

const infgeneral = new user1 ({
    nombre: string,
    apellido: string,
    apellidom: string,
    rfc: string,
    curp: string,
}, {
    timestamps: true
});

module.exports = model('User1', infgeneral);


