const options = require('../config/database');
const knex = require('knex')(options);

knex.schema.createTable('articulos', table => {
    table.increments('id').primary().notNullable();
    table.string('nombre',15).notNullable();
    table.string('codigo',10).notNullable();
    table.float('precio');
    table.integer('stock');
}).then(() => {
    console.log('tabla articulos creada!');
}).catch(error => {
    console.log('error:', error);
    throw error;
}).finally(() => {
    console.log('cerrando conexion...');
    knex.destroy();
});
