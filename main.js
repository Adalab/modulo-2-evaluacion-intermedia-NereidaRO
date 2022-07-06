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
console.log(numberPC); //el número carga al inicio, no cuando la usuaria clique

function handleClick(event) {
    event.preventDefault();
    const yourNumber = inputNumber.value;
    if(parseInt(yourNumber) === numberPC){
        clueParagraph.innerHTML = `¡Has ganado, campeona!`;
    } else if (parseInt(yourNumber) > numberPC && parseInt(yourNumber) < 100) {
        clueParagraph.innerHTML = `Demasiado alto`;
    } else if (parseInt(yourNumber) < numberPC) {
        clueParagraph.innerHTML = `Demasiado bajo`;
    } else if (parseInt(yourNumber) > 100) {
        clueParagraph.innerHTML = `El número debe estar entre 1 y 100`;
    };
};

button.addEventListener('click', handleClick);