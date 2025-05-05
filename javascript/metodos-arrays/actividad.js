//actividad//


let productos =[];
productos.push({ nombre: "Celular", precio: 500, categoria: "Electrónica" });
productos.push({ nombre: "Zapatillas", precio: 100, categoria: "Ropa" });
productos.push({ nombre: "Cafetera", precio: 80, categoria: "Electrodomésticos" });

//forEach
console.log("Todos los productos:");
productos.forEach(inventario => {
  console.log(inventario);
});

//filter
let electronicos = productos.filter(producto => producto.categoria === "Electrónica");
console.log("Productos electrónicos:");
console.log(electronicos);

//array donde uso map
let nombresProductos = productos.map(producto => producto.nombre);
console.log("Nombres de los productos:");
console.log(nombresProductos); 

