'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticulosSchema extends Schema {
  up () {
    this.create('articulos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('articulos')
  }
}

module.exports = ArticulosSchema
