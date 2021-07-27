const fs = require('fs');

class Archivo {

    constructor(archivo) {
        this.archivo = archivo
    }

    async leer(){
        try {
            const lectura = await fs.promises.readFile('./productos.txt', 'utf-8');
            console.log("archivo leido correctamente");
            const info = JSON.parse(lectura);
            //console.log(info);
            return info
        } catch (error) {
            return []
        }
    }

    async guardar(producto){   
        const productos = await this.leer();
        console.log(productos);
        productos.push({id: productos.length + 1, ...producto})

        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify(productos, null, '\t'))

            console.log(productos);

        } catch (error) {
            console.log("error de escritura, archivo vacio");
        }

    }

    async borrar(){

        try {
            await fs.promises.unlink(this.archivo)
        } catch (error) {
            console.log("error de borrado");
        }
    }

}

const nuevoArchivo = new Archivo('./productos.txt');

nuevoArchivo.guardar({
    "title": "Escuadra",
    "price": 123.45,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
});

setTimeout(function(){ nuevoArchivo.guardar({                      
    "title": "Calculadora",
    "price": 234.56,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
}); 
}, 300);

setTimeout(function(){ nuevoArchivo.guardar({                      
    "title": "Globo Terráqueo",
    "price": 345.67,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"
}); 
}, 500);


//nuevoArchivo.borrar();