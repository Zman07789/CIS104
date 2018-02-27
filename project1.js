/*
Design the logic for a program for the River Falls Homes Construction Company. Design a program that prompts the user
 for a lot number in the River Falls subdivision, and data about the home to be built there including number of bedrooms, number of bathrooms,
  and size of garage in number of cars it holds. Output is the price of the home which is $50,000 base price plus $17,000 for each bedroom,
   $12,500 for each bathroom, and $6,000 for each car the garage holds. (Only needs to run once).
 */

/**
 *   @author Paulson, Zackary (paulsonz@has-k12.org)
 *   @version 0.0.3
 *   @summary Project 2 demo code || created: 03.16.2016
 *   @todo
 */
//section 1
"use strict";
const PROMPT = require('readline-sync');
//section 2
let numBeds, numBaths, numCars, setLotNum;
let totalBeds, totalBaths, totalCars, totalPrice;
const BASE_PRICE = 50000;
const BED_PRICE = 17000;
const BATH_PRICE = 12500;
const CAR_PRICE = 6000;

//section 3
function main() {
lotNumber();
numberCars();
numberBaths();
numberBeds();
calculateTotals();
printResults();

}
//section 4
main();

function lotNumber() {
    setLotNum= PROMPT.question(`\nPlease enter A lot Number: `);
}

function numberCars() {
    numCars = PROMPT.question(`\nPlease enter Number of Cars : `);
}

function numberBaths() {
    numBaths = PROMPT.question(`\nPlease enter Number of Bathrooms : `);

}
function numberBeds() {
    numBeds= PROMPT.question(`\nPlease enter The Number Of Beds : `);
}
function calculateTotals(){
    totalBeds = BED_PRICE * numBeds;
    totalBaths = BATH_PRICE * numBaths;
    totalCars = CAR_PRICE * numCars;
    totalPrice = numBeds + numBaths + numCars + BASE_PRICE;
}
function printResults() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log("\nYour Price For Your Home In The River Falls Subdivision Would Be $ "+ totalPrice + ".")
}
/*
This program is designed to demonstrate very basic coding paradigms
Topics: code layout, declaring/initializing global/local variables/constants, parameters, modularization & dispatching
          comments (single/multi line, JSDoc), pragmas, data types
 */