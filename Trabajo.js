alert('Para poder usar el codigo por favor registrese');
const usuario = prompt('ingrese el nombre de usuario');
const contraseña = prompt('ingrese su contraseña');
// Comentario para separar
alert('ingrese el nombre de usuario creado');
//Comentario para separar
const usuarioCreado = prompt('ingrese usuario creado');
const contraseñaCreado = prompt('ingrese contraseña creada');


while (usuario != usuarioCreado && contraseña != contraseñaCreado) {
    alert('El usuario o contraseña es diferente al creado');
    const usuarioCreado = prompt('ingrese usuario creado');
    const contraseñaCreado = prompt('ingrese contraseña creada');
}

alert(`Bienvenido` + ' ' + usuarioCreado);



class profesor {
    constructor() {
        this.nombre = usuarioCreado;
        this.edad = 23;
    }
    saludo() {
        return `Hola ${this.nombre}`;
    }
}

class clases extends profesor {
    constructor() {
        super();
        this.temprano = 'matematica';
        this.tarde = 'biologia';
        this.noche = 'logica';
    }
    profesorclases() {
        return `las clases que tiene por la mañana son ${this.temprano} por la tarde ${this.tarde} y por la noche ${this.noche}`;
    }
}

const obtenido = new profesor();
const obtenido2 = new clases();
console.log(obtenido.saludo());
console.log(obtenido2.profesorclases());






