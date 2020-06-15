import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final*/
let Team2014 = fifaData.filter((game)=>{
     return game['Year'] === 2014 && game['Stage'] === 'Final'
 }
 ); 
 console.log(Team2014[0]['Home Team Name']);
 //(b) Away Team name for 2014 world cup final
 console.log(Team2014[0]['Away Team Name']);
 //(c) Home Team goals for 2014 world cup final
 console.log(Team2014[0]['Home Team Goals']);
 //(d) Away Team goals for 2014 world cup final
 console.log(Team2014[0]['Away Team Goals']);
 //(e) Winner of 2014 world cup final */
 if(Team2014[0]['Home Team Goals'] > Team2014[0]['Away Team Goals']){
     console.log(Team2014[0]['Home Team Name'])
 } else (console.log(Team2014[0]['Away Team Name']));


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of 
objects with only finals data */

function getFinals(data) {
    /* code here */
return data.filter((game)=>{
    return game['Stage'] === 'Final' //filters games by game stage and returns array of objects
}
); 
};

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, 
and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    let years = [];
    let array = callback(fifaData);
    for (let i =0; i < array.length; i++){
        years.push(array[i]['Year'])
    }
return years
    /* code here */

};
/* Task 5: Implement a higher-order function called `getWinners`, 
that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. 
Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    let winners = [];
     let array = callback(fifaData)

     for (let i = 0; i < array.length; i++){
         if(array[i]['Home Team Goals'] > array[i]['Away Team Goals']){
             winners.push(array[i]['Home Team Name'])
     }
 }

//     /* code here */
 return winners
 };

console.log(getWinners(getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` 
that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback1, callback2) {
    let winners = callback1();
    let years = callback2();

    for(let i = 0; i < winners; i++){
        console.log `In ${years[i]}, ${winners[i]} won the world cup!`
    }

};

getWinnersByYear(getWinners, getYears);

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` 
and returns the the average number of home team goals and away team goals scored per match
 (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    /* code here */

};

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` 
and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` 
and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter 
`data` and calculates the team with the most goals scored against them per appearance 
(average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
