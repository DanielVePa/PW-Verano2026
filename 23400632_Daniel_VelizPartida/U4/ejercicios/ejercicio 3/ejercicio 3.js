/*ejercicio 3 */
function dados() {
    let d1, d2, i=0;
    do {
        d1 = Math.floor(Math.random() * 7) + 1;
        d2 = Math.floor(Math.random() * 7) + 1;
        console.log(d1+" - "+d2);
        i++;
    }while(d1!=d2)
    console.log("se necesitaron "+i+" lanzamientos")
}
dados();