'use strict';

//Variables

const inputNumber = document.querySelector('.js-your-number');
const button = document.querySelector('.js-button');
const clueParagraph = document.querySelector('.js-clue');
const triesParagraph = document.querySelector('.js-tries');
const yourNumber = inputNumber.value; //esto va dentro de función

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};


button.addEventListener('click', handleClick);