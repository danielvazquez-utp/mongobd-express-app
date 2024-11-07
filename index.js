const express = require('express');
const mongoose = require('mongoose');
const Usuario = require('./models/usuario.model');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Bienvenido al servidor de API's");
});

app.post('/api/users', async(req, res) => {
    // console.log(req.body);
    // res.send(req.body);
    try {
        const usuario = await Usuario.create(req.body);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.get('/api/users', async(req, res) => {
    try {
        const usuarios = await Usuario.find({});
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.get('/api/users/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const usuarios = await Usuario.find({"_id": id});
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.put('/api/user/:id', async(req, res) => {
    // console.log(req.body);
    // res.send(req.body);
    try {
        const { id } = req.params;
        // const usuario = await Usuario.findAndModify({
        //     query: { "_id": id },
        //     update: req.body
        // });
        const usuario = await Usuario.findByIdAndUpdate(id, req.body);
        if (!usuario) {
            return res.status(404).json({message: "El usuario no existe"});
        }
        const usuarioActualizado = await Usuario.find({"_id": id});
        res.status(200).json(usuarioActualizado);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//mongoose.connect('mongodb+srv://danielvazquez:TmzGE4BlqpUP5vWw@mebackend.aiee7.mongodb.net/Node-API?retryWrites=true&w=majority&appName=MEBackend')
mongoose.connect('mongodb://localhost:27017/Node-API')
  .then(() => {
        console.log('Conectado a la base de datos');
        app.listen(3000, () => {
            console.log("El servidor esta escuchando en el puerto 3000");
        })
    })
  .catch(() => console.log('Error en la conexión'));