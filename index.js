const readlineSync = require('readline-sync');

const Saludo = () => {
    console.log(`Bienvenido Sistema de Desarrollo \n`);
    const nombre = readlineSync.question('Cual es tu nombre? ')

    console.log(`Bienvenido ${nombre}`);
} 


Saludo();