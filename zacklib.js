"use strict";
const PROMPT = require('readline-sync');

function getText(display) {
    let result = PROMPT.question(display);
    if(!result) {
        console.log("Must enter some text!");
        return getText(display);
    }
    return result;
}

exports.getText = getText;

function getNumber(display) {
    let result = Number(getText(display));
    if(isNaN(result)) {
        console.log("Must enter a number!");
        return getNumber(display);
    }
    return result;
}

exports.getNumber = getNumber;