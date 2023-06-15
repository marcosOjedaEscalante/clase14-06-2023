//ES6
import fs from 'fs';
import { Persona } from './nombre.js';
//ES5
//require

// CRUD nombres

// Create con cadenas
const createCad = (persona) => {
    let datos = fs.readFileSync('EstamosProbando.txt', 'utf-8');
    datos = datos + '\n' + persona.nombre;
    fs.writeFileSync('EstamosProbando.txt', datos);
}

// Create con arreglos
const createArr = (persona) => {
    let datos = fs.readFileSync('EstamosProbando.txt', 'utf-8');
    let datosEscritura = '';
    datos = datos.split('\r\n');
    datos.push(persona.nombre);
    console.log(datos);
    datos.forEach((nombre) => {
        datosEscritura = datosEscritura + nombre + '\n';
    });
    fs.writeFileSync('EstamosProbando.txt', datosEscritura);
}

const personaUno = new Persona('Juanito');
createArr(personaUno);

// Read



// Update



// Delete
