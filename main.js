'use strict';

//Variables

const inputNumber = document.querySelector('.js-your-number');
const button = document.querySelector('.js-button');
const clueParagraph = document.querySelector('.js-clue');
const triesParagraph = document.querySelector('.js-tries');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};

const numberPC = getRandomNumber(100);
console.log(`Mi número aleatorio es ${numberPC}`); //el número carga al inicio, no cuando la usuaria clique

let count = 0; //si está dentro, empieza desde 0 siempre

function counterTries() {
    count = count + 1;
    return count;
};


function handleClick(event) {
    event.preventDefault();
    const yourNumber = inputNumber.value;
    if(parseInt(yourNumber) === numberPC){
        clueParagraph.innerHTML = `¡Has ganado, campeona!`;
    } else if (parseInt(yourNumber) > numberPC && parseInt(yourNumber) < 100) {
        clueParagraph.innerHTML = `Demasiado alto`;
    } else if (parseInt(yourNumber) < numberPC && parseInt(yourNumber) >=1) {
        clueParagraph.innerHTML = `Demasiado bajo`;
    } else if (parseInt(yourNumber) > 100 || parseInt(yourNumber) < 1) {
        clueParagraph.innerHTML = `El número debe estar entre 1 y 100`;
    } else if (yourNumber !== parseInt(yourNumber)) {
        clueParagraph.innerHTML = `¡Debes escribir un número!`
    };
    const triesCount = counterTries();
    triesParagraph.innerHTML = `Número de intentos: ${triesCount}`;
};

button.addEventListener('click', handleClick);