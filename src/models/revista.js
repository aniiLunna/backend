const {user13, model} = require('mongoose');

const revista = new user13 ({
    titulo: string,
    autor: string,
    fecha: string,
    aceptacion: string,
    nombre: string
}, {
    timestamps: true
});

module.exports = model('user', revista);