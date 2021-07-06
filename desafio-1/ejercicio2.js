class Usuario {

    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    getMascotas() {
        return this.mascotas.length;
    }

    addBook(book, autor) {
        this.libros.push({ nombre: book, autor: autor});
    }

    getBooks() {
        let arrayNombres = [];
        for (let i = 0; i < this.libros.length; i++) {
            arrayNombres.push(this.libros[i].nombre);
        }
        return arrayNombres;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
}

let nombre = "Lucas"; 
let apellido = "Suarez";
let libros = [];
let mascotas = [];
    
let segundoUsuario = new Usuario(nombre, apellido, libros, mascotas);
    
segundoUsuario.addMascota("Perro");
segundoUsuario.addMascota("Gato");
segundoUsuario.addMascota("Conejo");
    
segundoUsuario.addBook("1984","George Orwell");
segundoUsuario.addBook("Crónica de una muerte anunciada","Gabriel García Márquez");
    
console.log(segundoUsuario.getMascotas());
console.log(segundoUsuario.getBooks());
console.log(segundoUsuario.getFullName());
