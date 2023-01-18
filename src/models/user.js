const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    nombre: String,
    apellidoPaterno: String,
    apellidoMaterno: String,
    rfc: String,
    curp: String,
    sexo: String,
    email: String,
    password: String
}, {
    timestamps: true
});

module.exports = model('User', userSchema);