/* ejercicio 4 */
function adivinanza() {
    var n1 = Math.floor(Math.random() * 100) + 1;
    let con=0;
    do {
        var n2 = parseInt(prompt("Adivina el numero"))
        if (n1 > n2) {
            console.log("El numero es mayor que " + n2)
        } else if (n1 < n2) {
            console.log("El numero es menor que " + n2)
        } else {
            console.log("Feliciades acertaste")
        }
        con++;
    } while (n1 != n2 && con < 7)
    if (con = 7) {
        console.log("Te quedaste sin intentos perdiste")
    }
}
adivinanza();