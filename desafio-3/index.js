const esperar = (ret) => {
    for(let i=0; i < ret*3e6; i++); 
}

const mostrar = (texto,tiempo = 1000,cantidadPalabras,callback) => {
    let palabras = texto.split(" ");
    palabras.forEach(element => {
        console.log(element);
        esperar(tiempo)
    })
    let totalPalabras = cantidadPalabras + palabras.length;
    callback(false,totalPalabras)
}

let texto1 = "Bienvenidos al desafio número 3";
let texto2 = "el curso es de Coderhouse";
let texto3 = "estamos probando llamadas asincronas con Node";
const tiempo = 700;

mostrar(texto1, tiempo,0, (error,totalPalabras) => {
    mostrar(texto2, tiempo, totalPalabras, (error, totalPalabras) => {
        mostrar(texto3, tiempo, totalPalabras, (error, totalPalabras) => {
            console.log('Proceso terminado, Cantidad de palabras:', totalPalabras);
        });
    });
});