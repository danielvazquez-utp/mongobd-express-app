const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Bienvenido al servidor de API's");
});

app.post('/api/users', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

mongoose.connect('mongodb+srv://danielvazquez:TmzGE4BlqpUP5vWw@mebackend.aiee7.mongodb.net/Node-API?retryWrites=true&w=majority&appName=MEBackend')
  .then(() => {
        console.log('Conectado a la base de datos');
        app.listen(3000, () => {
            console.log("El servidor esta escuchando en el puerto 3000");
        })
    })
  .catch(() => console.log('Error en la conexión'));