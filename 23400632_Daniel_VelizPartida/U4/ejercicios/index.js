
var nombre = "Juan";
let promedio=9.5;
const edad=20;

if(true){
    var libro="Libro 1";
    let animal="gato";
    animal=5;
    console.log(animal);
}
console.log(libro);

/*
let n1= parseInt(prompt("Ingresa un numero"));
let n2= prompt("ingresa un número");
console.log(n1);
console.log(n2);
*/
/*console-log(suma);*/

let suma =10+5;
let resta =10-5;
let multiplicacion = 10*5;
let division = 10/5;
let residuo = 10%3;
console.log("Suma: ",suma);
console.log("Resta: ",resta);
console.log("multiplicacion", multiplicacion);
console.log("Division: ", division);
console.log("Residuo ", residuo);

console.log(5>3);
console.log(5<3);
console.log(5>=3);
console.log(5<=3);
console.log(5=="5");
console.log(5==="5");

let calificacion=85;

if(calificacion>=90){
    console.log("Excelente");
} else if(calificacion>=70){
    console.log("Aprobado")
} else{
    console.log("Reprobado")
}

let tabla=5;
for (let i =1; i<=10;i++){
    console.log(`${tabla} x ${i} = ${tabla*i}`);
    console.log(tabla+"x"+i+"="+tabla*i);
}

let contador =1;
while(contador <=5){
    console.log(contador);
    contador++;
}

function saludar(){
    console.log("Saludos"+nombre);
}

saludar("Daniel");

function aleatorio(){
    let n=Math.floor(Math.random()*100)+1;
    console.log(n);
}
aleatorio();
/*
let numeros =[5,2];

console.log(numeros)
numeros.push(20);
console.log(numeros);
console.log(numeros[2]);

for(let i=0; i< numeros.length;i++){
    console.log(numeros[i]);
}

let persona ={
    nombre:"Juan",
    edad:20,
    ciudad:"tepic"

}
console.log(persona.nombre);
persona.nombre="Carlos";
console.log(persona.nombre);
persona.carrera="ISC";
console.log(persona);
*/

let numeros =[1,2,3,4,5];
let dobles= numeros.map(numero=>{
    return numero*2;
});
console.log(dobles);
