const {user14, model} = require('mongoose');

const sni = new user14 ({
    nivel: string,
    año: string

}, {
    timestamps: true
});

module.exports = model('user', sni);