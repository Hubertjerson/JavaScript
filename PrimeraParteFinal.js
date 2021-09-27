alert('Este codigo permite ver tus compras por dia y el total gastado')

//Es necesario tener una cuenta

alert('Para poder ver sus ventas por favor registrese');
const usuario = prompt('ingrese el nombre de usuario');
const contraseña = prompt('ingrese su contraseña');
// Comentario para separar
alert('ingrese el nombre de usuario creado');
//Comentario para separar
const usuarioCreado = prompt('ingrese usuario creado');
const contraseñaCreado = prompt('ingrese contraseña creada');


while (usuario != usuarioCreado && contraseña != contraseñaCreado) {
    alert('El usuario o contraseña es diferente al creado o No se ha creado una cuenta intente nuevamente');
    const usuarioCreado = prompt('ingrese usuario creado');
    const contraseñaCreado = prompt('ingrese contraseña creada');
}

alert(`Bienvenido` + ' ' + usuarioCreado);

// Compras hechas por el usuario registradas

const productosComprados = [
    { nombre: "Pollo", Precio: 10000, dia: "Lunes" },
    { nombre: "Gallina", Precio: 5000, dia: "Lunes" },
    { nombre: "Galletas", Precio: 1000, dia: "Lunes" },
    { nombre: "Cereales", Precio: 1600, dia: "Lunes" },
    { nombre: "Manzana", Precio: 600, dia: "Martes" },
    { nombre: "Fideos", Precio: 7000, dia: "Martes" },
    { nombre: "Platanos", Precio: 9000, dia: "Miercoles" },
    { nombre: "Arroz", Precio: 20000, dia: "Miercoles" },
    { nombre: "Maisena", Precio: 900, dia: "Miercoles" },
    { nombre: "Yogurt", Precio: 3000, dia: "Jueves" },
    { nombre: "Bebidas", Precio: 6000, dia: "Jueves" },
    { nombre: "Carne", Precio: 20000, dia: "Viernes" },
    { nombre: "Longaniza", Precio: 3000, dia: "Viernes" },
]

console.log('Los productos comprados fueron')
console.log(productosComprados)

// Pregunta al usuario
let respuestaCompra = prompt('Desea ver sus compras por dia')

if (respuestaCompra === "si") {
    let respuestaDia = prompt('Que dias de compra desea ver, Por favor ingrese la primera Letra Mayuscula')
    let respuestaUsuarioDia = respuestaDia
    const filtradoRespuesta = productosComprados.filter((producto) => producto.dia === respuestaUsuarioDia)
    console.log('Los productos comprados por el dia' + ' ' + respuestaDia + ' ' +'fueron')
    console.log(filtradoRespuesta)
    //Espacion
    const totalGastado = filtradoRespuesta.reduce((acumulador, producto) => acumulador + producto.Precio, 0)
    console.log('El total gastado fue'+ ' ' + totalGastado)
}else{
    console.log('Vuelva Pronto')
}






