//actividad//


let producto =[];
producto.push({ nombre: "Celular", precio: 500, categoria: "Electrónica" });
producto.push({ nombre: "Zapatillas", precio: 100, categoria: "Ropa" });
producto.push({ nombre: "Cafetera", precio: 80, categoria: "Electrodomésticos" });

//forEach
console.log("Todos los productos:");
producto.forEach(inventario => {
  console.log(inventario);
});

//filter
let electronicos = producto.filter(inventario => producto.categoria === "Electrónica");
console.log("Productos electrónicos:");
console.log(electronicos);

//array donde uso map
