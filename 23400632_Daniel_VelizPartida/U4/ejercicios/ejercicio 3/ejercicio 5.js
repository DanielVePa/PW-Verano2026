// Este programa está pensado para ejecutarse en la
// consola del navegador (usa prompt() y alert()).

// Arreglo (array) que almacenará los objetos de venta
let ventas = [];

// Función para registrar una venta
function registrarVenta() {
    const vendedor = prompt("Nombre del vendedor:");
    const producto = prompt("Nombre del producto:");
    const cantidad = parseInt(prompt("Cantidad vendida:"));
    const precioUnitario = parseFloat(prompt("Precio unitario:"));

    // Objeto que representa la venta
    const venta = {
        vendedor: vendedor,
        producto: producto,
        cantidad: cantidad,
        precioUnitario: precioUnitario,
        total: cantidad * precioUnitario,
    };

    // .push() para agregar la venta al arreglo
    ventas.push(venta);
}

// Ciclo para registrar múltiples ventas
let continuar = true;
while (continuar) {
    registrarVenta();
    continuar = confirm("¿Deseas registrar otra venta?");
}

// Total de ventas realizadas
const totalVentas = ventas.length;

// Total de ingresos generados 
const totalIngresos = ventas.reduce((acc, venta) => acc + venta.total, 0);

// Unidades vendidas por producto 
const unidadesPorProducto = {};
ventas.forEach((venta) => {
    if (unidadesPorProducto[venta.producto]) {
        unidadesPorProducto[venta.producto] += venta.cantidad;
    } else {
        unidadesPorProducto[venta.producto] = venta.cantidad;
    }
});

// Vendedor con más ventas en monto total
const totalesPorVendedor = {};
ventas.forEach((venta) => {
    if (totalesPorVendedor[venta.vendedor]) {
        totalesPorVendedor[venta.vendedor] += venta.total;
    } else {
        totalesPorVendedor[venta.vendedor] = venta.total;
    }
});

// Usamos .map() para convertir el objeto en un arreglo de [nombre, monto]
// y luego .reduce() para encontrar el máximo
const vendedorTop = Object.entries(totalesPorVendedor)
    .map(([nombre, monto]) => ({ nombre, monto }))
    .reduce((max, actual) => (actual.monto > max.monto ? actual : max));

// Mostrar resultado

console.log(`Total de ventas realizadas: ${totalVentas}`);
console.log(`Total de ingresos: $${totalIngresos.toFixed(2)}`);

console.log("\nUnidades vendidas por producto:");
Object.entries(unidadesPorProducto).forEach(([producto, cantidad]) => {
    console.log(`- ${producto}: ${cantidad} unidades`);
});

console.log(`\nVendedor con más ventas: ${vendedorTop.nombre} ($${vendedorTop.monto})`);
