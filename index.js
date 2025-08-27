const readlineSync = require('readline-sync');

const Saludo = () => {
    console.log(`Bienvenido Sistema de Desarrollo \n`);
    const nombre = readlineSync.question('Cual es tu nombre? ')

    console.log(`Bienvenido ${nombre}`);
} 

const SumaMenu = () => {
    console.log(`******************************************************* \n`)
    console.log(`Sistema de Sumas \n`);
    const n1 = readlineSync.question(`Ingresa tu primer numero: `);
    const n2 = readlineSync.question(`Ingresa tu primer Segundo: `);

    let total = parseFloat(n1) + parseFloat(n1);
    console.log(`Tu Resultado es  ${total}`);
}

Saludo();
SumaMenu();