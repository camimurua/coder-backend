const options = require('../config/database');
const knex = require('knex')(options);

const arts = [
    { nombre: 'Audi', codigo:'A', precio: 52642, stock:100 },
    { nombre: 'Mercedes', codigo:'M', precio: 57127, stock:100 },
    { nombre: 'Skoda', codigo:'S', precio: 9000, stock:100 },
    { nombre: 'Volvo', codigo:'V', precio: 29000, stock:100 },
    { nombre: 'Bentley', codigo:'B', precio: 350000, stock:100 },
    { nombre: 'Citroen', codigo:'C', precio: 21000, stock:100 },
    { nombre: 'Hummer', codigo:'H', precio: 41400, stock:100 },
    { nombre: 'Volkswagen', codigo:'VW', precio: 21600, stock:100 }
];

(async () => {
    try {
        console.log('--> borramos tabla articulos');
        await knex.schema.dropTableIfExists('articulos');

        console.log('--> tabla articulos creada!');
        await knex.schema.createTable('articulos', table => {
            table.increments('id').primary().notNullable();
            table.string('nombre',15).notNullable();
            table.string('codigo',10).notNullable();
            table.float('precio');
            table.integer('stock');
        });

        console.log('--> insertamos los autos');
        await knex('articulos').insert(arts);

        console.log('--> leemos todos los articulos');
        let rows = await knex.from('articulos').select('*');

        for (row of rows) {
            console.log(`${row['id']} ${row['nombre']} ${row['codigo']} ${row['precio']} ${row['stock']}`);
        }

        console.log('--> borramos un articulo');
        await knex.from('articulos').where('id', '=', '3').del();

        console.log('--> actualizamos un articulo');
        await knex.from('articulos').where({id:2}).update({ stock:0 })

        console.log('--> leemos todos los autos actualizados');
        rows = await knex.from('articulos').select('*');

        for (row of rows) {
          console.log(`${row['id']} ${row['nombre']} ${row['codigo']} ${row['precio']} ${row['stock']}`);
        }

    } catch (error) {
        console.log(error);
    } finally {
        knex.destroy();
    }
})();
