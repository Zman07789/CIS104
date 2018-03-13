/**
 *@author Paulson, Zackary (paulsonz@student.ncmich.edu)
 */
//section 1
"use strict";
const ZLIB = require('./zacklib');

//section 2
const MOVIE_TITLES =["Godzilla", "Irobot", "The Lion King", "Norbit", "Black Panther", "Iron Man", "Kingsman", "Thor" ]

let movieList = [];
let movieMap = new Map();

let mainLoop = 1;

class Movie {
    constructor(name){
        this.name = name;
        this.ratings = [];
    }
}

//section 3


function main() {
    loadProgram();
    while(mainLoop) {
        runMovieKiosk();
    }
}

main();

// Section 4

function displayAllMovies() {
    for(let movie of movieList) {
        console.log(movie);
    }
}
function addNewMovie() {
    let movieTitle = ZLIB.getText("Please Enter Title:  ");
    if(movieMap.has(movieTitle.toUpperCase())) {
        console.log("No duplicates please!");
        return;
    }
    let newMov = new Movie(movieTitle);
    movieList.push(newMov);
    movieMap.set(movieTitle.toUpperCase(), newMov);
    console.log("Movie Has Been Successfully Added");


}
function runMovieKiosk() {
    console.log("1. Display Movies");
    console.log("2. Add New Movie");
    console.log("3. Rate a Movie");
    console.log("4. Display specific movie");
    console.log("5. Quit");

    switch(ZLIB.getNumber("Please Enter Number: ")) {
        case 1:
            displayAllMovies();
            break;
        case 2:
            addNewMovie();
            break;
        case 5:
            mainLoop = 0;
            break;
        default:
            console.log("Invalid choice!");
            return;
    }

}

function loadProgram() {
    for(let name of MOVIE_TITLES) {
        let newMov = new Movie(name);
        movieList.push(newMov);
        movieMap.set(name.toUpperCase(), newMov);
    }
}