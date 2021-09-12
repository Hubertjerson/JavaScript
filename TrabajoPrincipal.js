

var personaNombre = prompt('ingrese su nombre');
var personaProducto = prompt('Los productos disponibles son agua - leche - bebidas');

switch (personaProducto) {
    case 'agua':
        alert('La persona' + ' ' + personaNombre + 'compro' + ' ' + personaProducto + ' ' + 'Muchas Gracias');
        break;
    case 'leche':
        alert('La persona' + ' ' + personaNombre + 'compro' + ' ' + personaProducto + ' ' + 'Muchas Gracias');
        break;
    case 'bebida':
        alert('La persona' + ' ' + personaNombre + 'compro' + ' ' + personaProducto + ' ' + 'Muchas Gracias');
        break;
    default:
        alert('No puso ningun producto');
        alert('Gracias por la visita');
        break;
}