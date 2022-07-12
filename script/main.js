'use strict';

//Variables

const inputNumber = document.querySelector('.js-your-number');
const button = document.querySelector('.js-button');
const clueParagraph = document.querySelector('.js-clue');
const triesParagraph = document.querySelector('.js-tries');
let count = 0; //si está dentro, empieza desde 0 siempre
const numberPC = getRandomNumber(100);
console.log(`Mi número aleatorio es ${numberPC}`); //el número carga al inicio, no cuando la usuaria clique

//Funciones

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};

function countTries() {
    count = count + 1;
    return count;
};
function renderClue (text) {
    clueParagraph.innerHTML = `${text}`;
};

function renderCount () {
    const triesCount = countTries();
    triesParagraph.innerHTML = `Número de intentos: ${triesCount}`;
};

function compareNumber (yourNumber){
    if(parseInt(yourNumber) === numberPC){
        renderClue(`¡Has ganado, campeona!`);
    } else if (parseInt(yourNumber) > numberPC && parseInt(yourNumber) < 100) {
        renderClue(`Demasiado alto`);
    } else if (parseInt(yourNumber) < numberPC && parseInt(yourNumber) >=1) {
        renderClue(`Demasiado bajo`);
    } else if (parseInt(yourNumber) > 100 || parseInt(yourNumber) < 1) {
        renderClue(`El número debe estar entre 1 y 100`);
    } else if (yourNumber !== parseInt(yourNumber)) {
        renderClue(`¡Debes escribir un número!`);
    };
};

//Evento y manejadora

function handleClick(event) {
    event.preventDefault();
    const yourNumber = inputNumber.value;
    compareNumber (yourNumber);
    renderCount ();
};

button.addEventListener('click', handleClick);