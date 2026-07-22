const express = require("express");
const app = express();
const PORT = 3000;
app.get("/",(req,res)=>{
    res.send("Bienvenido al servidor con express");
});
app.listen(PORT, ()=>{
    console.log("Servidor iniciado en http://localhost:"+PORT);
})
app.get("/pagina",(req,res)=>{
    res.send(`
        <h1>Mi página</h1>
        <p>Creada con express</p>
        `);
});
app.get("/saludo/:nombre",(req,res)=>{
    const nombre =req.params.nombre;
    res.send("Hola "+nombre);
})

/*ejercicio 1*/
app.get("/par/:numero",(req,res)=>{
    const numero=req.params.numero;
    if(numero %2==0){
        res.send("su numero es par")
    }else {
        res.send("su numero es impar")
    }
})
/*ejercicio 2 */
app.get("/edad/:edad",(req,res)=>{
    const edad=req.params.edad;
    if(edad>=18){
        res.send("Eres mayor de edad");
    }else{
        res.send("Eres menor de edad");
    }
})

/*ejercicio 3 */
app.get("/calculadora/:operacion/:a/:b",(req,res)=>{
    let operacion = req.params.operacion;
    var a = Number(req.params.a);
    var b = Number(req.params.b);
    var resultado=0;
    if(operacion=="suma"){
        resultado=a+b;
        res.send("Resultado: "+resultado);
    }else if(operacion=="multiplicacion"){
        resultado=a*b;
        res.send("Resultado: "+resultado);
    }else if(operacion=="resta"){
        resultado=a-b;
        res.send("Resultado: "+resultado);
    }else if(operacion=="division"){
        resultado=a/b;
        res.send("Resultado: "+resultado);
    }
})

/*ejercicio 4*/
app.get("/tabla/:numero",(req,res)=>{
    const numero= Number(req.params.numero);
    let resultado;
    let output=""
    for(let i=1;i<=10;i++){
        resultado=numero*i
        output+=i+" x "+numero+" = "+resultado+"<br>";
    }
    res.send(output);
})

/*ejercicio 5*/
app.get("/calificacion/:nota", (req, res) => {
    const nota = Number(req.params.nota);
    if (nota >= 90) {
        res.send("Excelente");
    } else if (nota >= 80) {
        res.send("Muy bien");
    } else if (nota >= 70) {
        res.send("Aprobado");
    } else {
        res.send("Reprobado");
    }
});