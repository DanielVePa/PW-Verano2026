/*ejercicio 1*/
let base;
let exponente;
function potencia(base, exponente) {
    let resultado=1;
    for (let i = 0; i < exponente; i++){
        resultado = resultado * base;
    }
    console.log(resultado)
}
potencia(base = parseInt(prompt("ingresa la potencia")),
    exponente = parseInt(prompt("ingresa el exponente")));