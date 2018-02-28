/*
Design a program for the Hollywood Movie Rating Guide, in which users continuously enter a value from 0 to 5
that indicates the number of stars they are awarding to a movie title they are prompted for. The program executes
continuously until a user decides to quit. If a user enters a star value that does not fall in the correct range,
re-prompt the user three (3) times until a correct value is entered. At the end of the program, display the average
star rating for the movie.
*/
/**
 *@author Paulson, Zackary (paulsonz@student.ncmich.edu)
 */
//section 1
"use strict";
const PROMPT = require( 'readline-sync');

//section 2
let movieTitle;
let movieRating = [];
let avgRating;
let errors=0;

const minimumStars= 0;
const maximumStars= 5;
const maximumTries= 3;

//section 3
function main(){
setMovieTitle();
getReviews();
calculateRating();
displayResults();
}

//section 4
   main();

   function setMovieTitle(){
       movieTitle =  PROMPT.question("What Movie are we reviewing: ", true);
      if(movieTitle.length === 0){
        console.log("Error: Must Not Be Empty")
          return setMovieTitle();
      }
   }
   function oneRating(){
     let rating = Number(PROMPT.question("Gathering Reviews for " + movieTitle + ". Enter How many stars (0-5)."));
     if(isNaN(rating) || rating<minimumStars || rating>maximumStars){
       console.log("Error: Must Enter Number Within The Rating");
       errors++;
       return;
     }
     movieRating.push(rating);

   }

   function getReviews() {
       while(errors < maximumTries) {
           oneRating();
       }
   }
   function calculateRating() {
       let totalRatings = 0;
       for (let rating of movieRating) {
           totalRatings += rating;
       }
       avgRating = totalRatings / movieRating.length;

}
    function displayResults() {
        console.log("The Average Ratings for " + movieTitle + " is: " + avgRating);
    }