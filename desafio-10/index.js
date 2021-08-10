const express = require('express');
const { producto } = require('./api/productos');
const productos = require('./api/productos');
const handlebars = require('express-handlebars')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ARCHIVOS ESTÁTICOS
app.use(express.static('public'));

//CONFIGURAR HANDLEBARS
app.engine('hbs', handlebars({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts'    
}));

// ESTABLECER MOTOR DE PLANTILLAS
app.set("view engine", "hbs");
// DIRECTORIO ARCHIVOS PLANTILLAS
app.set("views", "./views");

// CREAR ROUTER
const routerApi = express.Router()

// LISTAR PRODUCTOS

routerApi.get('/productos/listar', (req, res) => {
    if(productos.producto.length > 0){
        res.render('vista', {hayProductos: true, productos: productos.producto})
    }else if (productos.producto.length == 0){
        res.render('vista', {hayProductos: false})
    }    
})

// LISTAR PRODUCTOS POR ID
routerApi.get('/productos/listar/:id', (req, res) => {
    let mensajeLista = {};
    if (!productos.producto[req.params.id]) {
        mensajeLista = { error: 'Producto no encontrado' };
    } else {
        mensajeLista = productos.producto[req.params.id];
    }
    res.json(mensajeLista)
})

// GUARDAR PRODUCTO
routerApi.post('/productos/guardar', (req, res) => {
    let nuevoProducto = {};
    nuevoProducto.title = req.body.title;
    nuevoProducto.price = req.body.price;
    nuevoProducto.thumbnail = req.body.thumbnail;
    nuevoProducto.id = productos.producto.length;
    productos.guardar(nuevoProducto)
    res.json(nuevoProducto)
})

//ACTUALIZAR PRODUCTO POR ID
routerApi.put('/productos/actualizar/:id', (req, res) => {
    let idProducto = req.params.id;
    let nuevoProducto = req.body;
    productos.actualizar(idProducto, nuevoProducto);
    nuevoProducto.id = productos.producto.indexOf(nuevoProducto);
    res.json(nuevoProducto);
})

// BORRAR PRODUCTO POR ID
routerApi.delete('/productos/borrar/:id', (req, res) => {
    let idProducto = req.params.id;
    res.json(productos.borrar(idProducto));    
})

app.use('/api', routerApi)

const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

server.on('error', error => {
    console.log('error en el servidor:', error);
});
