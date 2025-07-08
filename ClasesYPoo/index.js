"use strict";
class Pelicula {
    proyectadaEnCine() {
        console.log(`${this.nombre} se proyecta en cine`);
    }
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
}
const pelicula = new Pelicula('El padrino', ['Al Pacino', 'Robert De Niro', 'James Caan'], ['Al Pacino', 'Robert De Niro', 'James Caan']);
const pelicula2 = new Pelicula('spiderman', ['Tom Holland', 'Zendaya', 'Andrew Garfield'], ['Tom Holland', 'Zendaya', 'Andrew Garfield']);
console.log(pelicula);
console.log(pelicula2);
//ENCAPSULAMIENTO Y GENERICOS
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el numero sorteado es ${this.ticket}`;
    }
}
let sorteo = new Sorteo('Juan Quiroga');
sorteo.setTicket(10);
console.log(sorteo.sortear());
