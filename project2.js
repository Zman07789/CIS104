/*A program that accepts insurance policy data, including a policy number, customer last name, customer first name,
 birth date, premium due date (month, day, and year), and number of at-fault driver accidents in the last three years.
  Calculate customer age and set monthly insurance premium using the following criteria:

Base price = $100

Age >15 && < 30 = + $20

Age >= 30 && < 45 +10

Age >=60 +30

Each at-fault accident = + 50

Use proper recursion looping and input validation/sanitization.*/
/**
 *   @author Paulson, Zackary (paulsonz@has-k12.org)
 *   @version 0.0.3
 *   @summary Project 2 demo code || created: 03.16.2016
 *   @todo
 */
// section 1
"use strict";
const PROMPT = require('readline-sync');

//section 2
let lastName, firstName;
let PolicyNumber, dueDate, birthDate, atFaultAccidents;
let customerAge, premium;


const BASE_PRICE = 100;
const AT_FAULT_PENALTY = 50;
const LT_30 = 20;
const LT_45 = 10;
const GT_60 = 30;

//section3
function main() {
    setPolicyNum();
    setFirstName();
    setLastName();
    setBirthDate();
    setDueDate();
    setAtFault();
    setAge();
    calculatePremium();
    displayResults();
}
//section 4
    main();

    function setPolicyNum() {
        PolicyNumber = PROMPT.question("Enter Policy Number: ");
        PolicyNumber = Number(PolicyNumber);
        if (isNaN(PolicyNumber)) {
            console.Log("ERROR: Policy Number Must Be A Number");
            return setPolicyNum();
        }
    }

    function setFirstName() {
        firstName = PROMPT.question("Enter Your First Name: ");
        if (firstName.length === 0) {
            console.log("Error: Enter Your First Name!");
            return setFirstName();
        }
    }

    function setLastName() {
        lastName = PROMPT.question("Enter Your Last Name: ");
        if (firstName.Length === 0) {
            console.Log("Error: Enter Your Last Name!");
            return setLastName();
        }
    }

    function setDueDate() {
        dueDate = PROMPT.question("Enter Your due Date (MM/DD/YYYY)");
        dueDate = new Date(dueDate);
        if (isNaN(dueDate.getTime())) {
            console.Log("Error: Nothing has been enters ");
            return DueDate();
        }
    }

    function setBirthDate() {
        birthDate = PROMPT.question("Enter Birth Date (mm/dd/yyyy):");
        birthDate = new Date(birthDate);
        if (isNaN(birthDate.getTime())) {
            console.log("Error: Date is invalid");
            return setBirthDate();
        }
    }

    function setAtFault() {
        atFaultAccidents = PROMPT.question("Enter Number Of At Fault Accidents In the Last Three Years:");
        atFaultAccidents = parseInt(atFaultAccidents);
        if (isNaN(atFaultAccidents)) {
            console.Log("Error: Must Enter A Number");
            return setAtFault();
        }
    }

    function setAge() {
        let delta = Date.now() - birthDate.getTime();
        let age_delta = new Date(delta);
        customerAge = Math.abs(age_delta.getUTCFullYear() - 1970);
    }

    function calculatePremium() {
        premium = BASE_PRICE + AT_FAULT_PENALTY;
        switch (true) {
            case customerAge > 15 && customerAge < 30:
                premium += LT_30;
                break;
            case customerAge >= 30 && customerAge < 45 :
                premium += LT_45;
                break;
            case customerAge >= 60:
                premium += GT_60;
                break;
        }
    }

    function displayResults() {
        console.log(" Your Monthly Insurance Premium is $" + premium);
    }

    /*
    This program is designed to demonstrate very basic coding paradigms
    Topics: code layout, declaring/initializing global/local variables/constants, parameters, modularization & dispatching
              comments (single/multi line, JSDoc), pragmas, data types
     */

