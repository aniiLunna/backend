const {user8, model} = require('mongoose');

const GradosAcademicos = new user8 ({
    titulo:string,
    institucion:string
}, {
    timestamps: true
});

module.exports = model('user', GradosAcademicos);