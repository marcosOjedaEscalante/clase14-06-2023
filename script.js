console.log('Inicio de programa'); // primero

setTimeout(() => {
   console.log('Ejecutando el primer timeout'); // quinto
}, 3000);

setTimeout(() => {
    console.log('Ejecutando el segundo timeout'); // terceno
}, 0);

setTimeout(() => {
    console.log('Ejecutando el tercer timeout'); // cuarto
}, 0);

console.log('Fin de programa'); // segundo