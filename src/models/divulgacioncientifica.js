const {user6, model} = require('mongoose');

const DivulgacionCientifica = new user6 ({
    nombre:string,
    autor:string,
    revista:string,
    fecha:string,
    termino:string
}, {
    timestamps: true
});

module.exports = model('user6', DivulgacionCientifica);