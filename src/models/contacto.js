const {user2, model} = require('mongoose');

const contacto = new user1 ({
    email: String,
    emailInst: String,
    phone: String,
    movil: String,
    institucion: String,
    adscipcion: String
}, {
    timestamps: true
});

module.exports = model('user2', contacto);