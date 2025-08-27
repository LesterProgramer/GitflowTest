const readlineSync = require('readline-sync');

const Saludo = () => {
    console.log(`Esto es una prueba de saludo \n`);
    const nombre = readlineSync.question('¿Cual es tu nombre?')

    console.log(`Hola ${nombre}`);
} 

Saludo();