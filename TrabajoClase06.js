


const comprastotal =parseInt( prompt('Cuantas compras hara'))


class Producto {
    constructor(nombre,nombreCliente,precio,cantidad){
        this.nombreCliente =nombreCliente
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }

    precioTotal(){
        this.total=this.precio*this.cantidad
    }
}


const productos =[]

for (let i=0 ; i < comprastotal ; i++ ){
productos.push(new Producto(prompt('Ingrese el nombre del cliente'),prompt('Nombre del producto a comprar'),3000,prompt('La Cantidad de cosas a comprar')))
}

for(let i=0; i<productos.length;i++){
    productos[i].precioTotal()
}
console.log(productos)



