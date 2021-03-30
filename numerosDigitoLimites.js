//Script para verificar cuántos números poseen un dígito en particular en un rango dado

const inicio = 1;
const fin = 1200;
const digito = 6;

function poseeDigito (digito, numero){
    let resultado = 0;
    var valor = numero.toString();
    let cadena = valor.split('');

    cadena.forEach(dig => {
        if(dig === digito.toString()){
            resultado = 1;
            console.log('Valor encontrado', numero);
            return resultado;
        }
    });

    return resultado;
}

function compruebaCantidad (inicio, fin, digito){
    let contador = 0;
    for(let i = inicio; i <= fin; i++){
        contador += poseeDigito(digito, i);
    }
    console.log(contador);
}

compruebaCantidad(inicio, fin, digito);