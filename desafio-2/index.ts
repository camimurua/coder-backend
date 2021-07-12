async function operacion(a: number, b: number, operacion: string) {
    if(operacion == 'suma') {
        let modulo = await import("./suma");
        let operacionModulo= new modulo.Suma(a,b);
        let resultado = operacionModulo.resultado();
        //console.log(resultado);
        return Promise.resolve(resultado);
    }
    if(operacion == 'resta') {
        let modulo = await import("./resta");
        let operacionModulo= new modulo.Resta(a,b);
        let resultado = operacionModulo.resultado();
        //console.log(resultado);
        return Promise.resolve(resultado);
    }
}

async function operaciones() {
    console.log(await operacion(14,8, 'suma'));
    console.log(await operacion(15,3, 'resta'));
}

operaciones();