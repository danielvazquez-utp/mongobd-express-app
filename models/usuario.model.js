const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema(
    {
        id_usuario: {
            type: Number,
            required: false
        }, 
        matricula : {
            type: String,
            required: true
        }, 
        nombre : {
            type: String,
            required: true
        }, 
        apaterno : {
            type: String,
            required: true
        }, 
        amaterno : {
            type: String,
            required: true
        }, 
        id_perfil : {
            type: Number,
            required: true
        }, 
        grado : {
            type: String,
            required: true
        }, 
        empleo : {
            type: String,
            required: true
        }, 
        contrasena : {
            type: String,
            required: true
        }, 
        unidad : {
            type: String,
            required: true
        }
    },
    {
        timestamp: true,
    }
);

const Usuario = mongoose.model("Usuario", UsuarioSchema);
module.exports = Usuario;