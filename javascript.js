var mostrar = document.getElementById('objetoId');

/*var objeto = {
    nombre: 'Franks',
    edad: '21'
}

console.log(objeto);

mostrar.innerHTML += objeto.nombre;*/

var arrayObjetos = [
    {
        nombre: 'frank',
        edad: 21
    },
    {
        nombre: 'smith',
        edad: 18
    }
];

//console.log(arrayObjetos);

for (let i of arrayObjetos){
    console.log(i.edad);
    
}
mostrar.innerHTML = ('Nombre: ' + arrayObjetos[0].nombre)

