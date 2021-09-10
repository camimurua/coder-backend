//Knex
const options = require("../config/mensajes");
const knex = require("knex")(options);

class Chat {
  constructor() {
    // incializar variables
  }

  async read() {
    console.log("read chats");    
      try {
        let mensajes = await knex.from("mensajes").select("*");
        return mensajes;
      } catch (error) {
        throw error;
      } 
    
  }

  async save(objeto) {
    console.log("save chat");

    const mensajes = await this.read();

    let id = mensajes.length + 1;

    let item = {
      author: objeto.author,
      text: objeto.text,
      email: objeto.email,
      datetime: new Date(Date.now()).toLocaleString(),
    };    
      try {
        await knex("mensajes").insert(item);
        return item;
      } catch (error) {
        throw error;
      } 
    
  }
}

module.exports = new Chat();
