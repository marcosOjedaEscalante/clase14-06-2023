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
    datos = datos.replace('\r', ''); // limpiando la cadena de \r y dejando solamente \n
    datos = datos.split('\n');
    datos.push(persona.nombre);
    datos = datos.join('\n');
    fs.writeFileSync('EstamosProbando.txt', datos);
}

// Read
const readAll = () => {
    let datos = fs.readFileSync('EstamosProbando.txt', 'utf-8');
    datos = datos.replace('\r', '');
    datos = datos.split('\n');
    return datos;
}

console.log(readAll());
// Update



// Delete
