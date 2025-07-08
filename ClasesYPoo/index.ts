class Pelicula {
    nombre?: string;
    protagonistas?: string[];
    actores?: string[];

    proyectadaEnCine(){
        console.log(`${this.nombre} se proyecta en cine`)
    }

    constructor(nombre: string, protagonistas: string[], actores: string[]){
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

class Sorteo <T>{
    private ticket?: T;

    constructor(private nombre: string){}

    setTicket(ticket: T){
        this.ticket = ticket;
    }

    getTicket(){
        return this.ticket;
    }

    public sortear(): string{
        return `Para ${this.nombre} el numero sorteado es ${this.ticket}`;
    }
}

let sorteo = new Sorteo<number>('Juan Quiroga');
sorteo.setTicket(10);
console.log(sorteo.sortear());
