const options = require('../config/productos');
const knex = require('knex')(options);

const prod = [
  {
    title: "Escuadra",
    price: 123.45,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    id: 1
  },
  {
    title: "Calculadora",
    price: 234.56,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
    id: 2
  },
  {
    title: "Globo Terráqueo",
    price: 345.67,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    id: 3
  }

];

(async () => {
    try {
        console.log('--> borramos tabla productos');
        await knex.schema.dropTableIfExists('productos');

        console.log('--> tabla productos creada!');
        await knex.schema.createTable('productos', table => {
            table.increments('id').primary().notNullable();
            table.string('title',30);
            table.float('price');
            table.string('thumbnail',100);
        });

        console.log('--> insertamos los productos');
        await knex('productos').insert(prod);

        console.log('--> leemos todos los productos actualizados');
        rows = await knex.from('productos').select('*');

        for (row of rows) {
          console.log(`${row['id']} ${row['title']} ${row['price']} ${row['thumbnail']}`);
        }

    } catch (error) {
        console.log(error);
    } finally {
        knex.destroy();
    }
})();
