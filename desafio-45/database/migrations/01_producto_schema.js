'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.string('title', 80).notNullable()
      table.integer('price')
      table.integer('stock')
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductoSchema
