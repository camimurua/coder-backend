function Usuario (nombre, apellido,libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
}

Usuario.prototype.addMascota = function(mascota) {
        this.mascotas.push(mascota);
}

Usuario.prototype.getMascotas = function() {
        return this.mascotas.length;
}

Usuario.prototype.addBook = function(book, autor){
        this.libros.push({ nombre: book, autor: autor});
}

Usuario.prototype.getBooks = function() {
        let arrayNombres = [];
        for (let i = 0; i < this.libros.length; i++) {
            arrayNombres.push(this.libros[i].nombre);
        }
        return arrayNombres;
}
    
Usuario.prototype.getFullName = function() {
        return `${this.nombre} ${this.apellido}`;
}
    
let nombre = "Lucas"; 
let apellido = "Suarez";
let libros = [];
let mascotas = [];
    
let primerUsuario = new Usuario(nombre, apellido, libros, mascotas);
    
primerUsuario.addMascota("Perro");
primerUsuario.addMascota("Gato");
primerUsuario.addMascota("Conejo");
    
primerUsuario.addBook("1984","George Orwell");
primerUsuario.addBook("Crónica de una muerte anunciada","Gabriel García Márquez");
    
console.log(primerUsuario.getMascotas());
console.log(primerUsuario.getBooks());
console.log(primerUsuario.getFullName());