const fs = require('fs');
const express = require('express');

const app = express();
const puerto = 8080;

let itemsVisitas = 0;
let itemsVisitasRandom = 0;

const randomNumber = (min, max) => {
    return Math.round(Math.random() * ((max) - min) + min)
}

app.get('/', (req, res)=>{
    res.send('<h1>Bienvenidos a mi desafío 7 - Express </h1>');
})

app.get('/items', (req, res)=>{
    itemsVisitas++;

    try {
        const lectura = fs.readFileSync('./productos.txt', 'utf-8');
        const productos = JSON.parse(lectura);
        
        const respuesta = JSON.stringify({
            items: productos,
            cantidad: productos.length
        }, null, 4)

        res.send(respuesta);

    } catch (error) {
        console.log(error);
        res.send('Productos no encontrados');
    }
})

app.get('/item-random', (req, res)=>{
    itemsVisitasRandom++;

    try {
        const lectura = fs.readFileSync('./productos.txt', 'utf-8');
        const productos = JSON.parse(lectura);
        
        const num = randomNumber(0, productos.length - 1);

        const respueta = JSON.stringify({
            item: productos[num]
        }, null, '\t')
        res.send(respueta);

    } catch (error) {
        console.log(error);
        res.send('Productos no encontrados');
    }
})

app.get('/visitas', (req, res)=>{
    const respuesta = JSON.stringify({
        visitas: {
            items: itemsVisitas,
            item: itemsVisitasRandom,
        }
    }, null, '\t')

    res.send(respuesta);
})


const server = app.listen(puerto, () => {
    console.log(`Servidor inicializado en http://localhost:${puerto}`);
})
server.on('error', error => {
    console.log('Error en servidor: ', error)
})