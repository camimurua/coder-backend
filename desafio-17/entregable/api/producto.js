//Knex
const options = require("../config/productos");
const knex = require("knex")(options);

class Productos {
  constructor() {
    // incializar variables
  }

  async read() {
    console.log("read productos");

    try {
      let productos = await knex.from("productos").select("*");
      return productos;
    } catch (error) {
      throw error;
    }
  }

  async save(objeto) {
    console.log("save productos");
    const productos = await this.read();

    let id = productos.length+ 1;
    let item = {
      title: objeto.title,
      price: objeto.price,
      thumbnail: objeto.thumbnail,
      id: id,
    };

    try {
      await knex("productos").insert(item);
      return item;
    } catch (error) {
      throw error;
    }
  }

  async update(id, objeto) {
    try {
      await knex
        .from("productos")
        .where("id", id)
        .update(objeto);
      return objeto;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const item = await knex
        .from("productos")
        .select("*")
        .where("id", "=", id);
      await knex
        .from("productos")
        .where("id", "=", id)
        .del();
      return item;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new Productos();
