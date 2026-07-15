/*generar dos numeros randoms y decir si son iguales o si uno es mayor que otro*/
function ejercicio_1(){
    console.log("ejercicio 1")
    let n1=Math.floor(Math.random()*100)+1;
    let n2=Math.floor(Math.random()*100)+1;
    console.log(n1);
    console.log(n2);
    if(n1==n2){
        console.log("los dos numeros son iguales");
    }else if(n1>n2){
        console.log(n1+">"+n2);
    }else{
        console.log(n1+"<"+n2);
    }
}
ejercicio_1();

/*generar numeros del 0 al 5 hasta que uno sea 0 */
function ejercicio_2(){
    console.log("ejercicio 2")
    let n1;
    while(n1!=0){
    n1=Math.floor(Math.random()*6)
    console.log(n1);
    }
}
ejercicio_2();

/* */
function ejercicio_3(){
    console.log("ejercicio 3")
    let n1=Math.floor(Math.random()*9)+2;
    console.log(n1);
    for(let i=0;i<11;i++){
        console.log(n1+"x"+i+"="+n1*i)
    }
}
ejercicio_3();

/* */
function ejercicio_4(){
    console.log("ejercicio 4")
    var pares=0;
    var impares=0;
    for(let i =0;i<=10;i++){
        let n1=parseInt(prompt("ingresa un numero del 1 al 100"));
        if(n1<1 || n1>100){
            let n1=prompt("ingresa un numero un numero correcto del 1 al 100")
        }else{
            if((n1%2)===0){
                pares++;
            }else{
                impares++;
            }
        }
    }
        console.log("cantidad de pares "+ pares);
        console.log("cantidad de impares "+ impares);
}
/*ejercicio_4();
 
/* */
function ejercicio_5(){
    console.log("ejercicio 5")
    let n1=parseInt(prompt("ingrese el total de ventas entre 5000 y 30000"))
    if(n1<5000 || n1> 30000){
        let n1=parseInt(prompt("ingrese un numero valido del total de ventas entre 5000 y 30000"))
    }else{
        if(n1<10000){
            console.log(n1)
            console.log((n1/100)*10)

        }else{
            console.log(n1)
            console.log((n1/100)*15)
        }
    }
}
ejercicio_5();