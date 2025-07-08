"use strict";
let estudiastJS = true;
if (estudiastJS) {
    console.log('El usuario estudia JS');
}
else {
    console.log('El usuario no estudia JS');
}
let Boca = 10;
let River = 5;
let mastantuono = 5;
let juegaMasta = true;
function jugar(equipo1, equipo2) {
    if (juegaMasta) {
        equipo2 += mastantuono;
    }
    if (equipo1 > equipo2) {
        console.log('Boca gana');
    }
    else if (equipo1 < equipo2) {
        console.log('River gana');
    }
    else {
        console.log('Empate');
    }
}
jugar(Boca, River);
//ANY es un tipo de dato que permite asignar cualquier valor a una variable
let disney;
disney = 'Mickey Mouse';
console.log(disney);
disney = 10;
console.log(disney);
disney = true;
console.log(disney);
// ARRAYS 
let arreglo = [1, 2, 3, 4, 5];
let arreglo2 = ['rojo', 'verde', 'azul'];
arreglo2[0].indexOf('r');
// OBJETOS LITERALES
let programador = {
    nombre: 'Juan',
    edad: 21,
    lenguaje: ['JavaScript', 'Python', 'Java'],
    esProgramador: true
};
programador = {
    nombre: 'Rori',
    edad: 23,
    lenguaje: ['JavaScript', 'Python', 'Java'],
    esProgramador: true
};
console.log(programador);
let programador2 = {
    nombre: 'Gabi',
    edad: 22,
    lenguaje: ['html', 'css', 'javascript'],
    esProgramador: true
};
let dev = {
    nombre: 'Gabi',
    edad: 22,
    lenguaje: ['html', 'css', 'javascript'],
    esProgramador: true
};
function enviarCv(dev) {
    console.log(`este cv es de ${dev.nombre} y tiene ${dev.edad} años`);
}
enviarCv(dev);
