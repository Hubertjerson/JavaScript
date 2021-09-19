
var usuario = prompt('Hola , Desea calcular algun numero "si o no"');
if(usuario ==='si'){
    var usuarioRespuesta = prompt('Que desea calcular "+" ,"-" ,"*" ')
    switch (usuarioRespuesta) {
        case '+':
            var resultadoNumero = suma();
            alert('La respuesta es'+ resultadoNumero);
            break;
        case '-':
            var resultadoNumero = restar();
            alert('La respuesta es'+ resultadoNumero);
            break;
        case '*':
            alert('La respuesta es'+ resultadoNumero);
            var resultadoNumero = multiplicar();
            break;
        default:
            alert('Gracias por Usar la Calculadora');
            break;
    }
}



function suma(){
    var numero1 = prompt('ingrese numero');
    var numero2 = prompt ('ingrese segundo numero');
    var resultadoNumero = parseInt(numero1)+parseInt(numero2);
    return resultadoNumero;
}

function restar(){
    var numero1 = prompt('ingrese numero');
    var numero2 = prompt ('ingrese segundo numero');
    var resultadoNumero = numero1 - numero2;
    return resultadoNumero;
}
function multiplicar(){
    var numero1 = prompt('ingrese numero');
    var numero2 = prompt ('ingrese segundo numero');
    var resultadoNumero = numero1 * numero2;
    return resultadoNumero;
}
