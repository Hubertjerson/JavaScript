//ejemplos de ordenar arreglos 

const numeros =[200,100,4,20,76,30];

numeros.sort((a,b)=>{
    if(a < b ){
        return -1;
    }
    if(a > b){
        return 1;
    }
    return 0;
});

console.log(numeros);
// segundo ejemplo de ordenar un arreglo
const equipos = [
    {
        nombre:"valencia",
        posicion: 12,
    },
    {
        nombre:"madrid",
        posicion: 2,
    },
    {
        nombre:"barcelona",
        posicion: 8,
    },
    {
        nombre:"cadiz",
        posicion: 14,
    },
    {
        nombre:"betis",
        posicion: 18,
    },
    {
        nombre:"sevilla",
        posicion: 6,
    },
    {
        nombre:"levante",
        posicion: 15,
    },
]
// Por Posicion
equipos.sort((a,b)=>{
    if(a.posicion > b.posicion){
        return 1;
    }
    if(a.posicion < b.posicion){
        return -1;
    }
    return 0;
});
console.log(equipos);

