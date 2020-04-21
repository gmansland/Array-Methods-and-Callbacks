import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// start A
const hometeamname14 = [];
fifaData.forEach(function(item){
    if (item["Year"] === 2014) {
    hometeamname14.push(item["Home Team Name"])
    }
    return (hometeamname14);
});

console.log(hometeamname14);

// next b

const awayteamname14 = [];
fifaData.forEach(function(item){
    if (item["Year"] === 2014) {
    awayteamname14.push(item["Away Team Name"])
    }
    return (awayteamname14);
});

console.log(awayteamname14);

// next c

const hometeamgoal14 = [];
fifaData.forEach(function(item){
    if (item["Year"] === 2014) {
    hometeamgoal14.push(item["Home Team Goals"])
    }
    return (hometeamgoal14);
});

console.log(hometeamgoal14);

// next d

const awayteamgoal14 = [];
fifaData.forEach(function(item){
    if (item["Year"] === 2014) {
    awayteamgoal14.push(item["Away Team Goals"])
    }
    return (awayteamgoal14);
});

console.log(awayteamgoal14);

//next e 

const winner2014 = [];

if (hometeamgoal14 > awayteamgoal14) {
  console.log(hometeamname14[0]);
} else if (awayteamgoal14 > hometeamgoal14) {
  console.log(awayTeamName14[0]);
}
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(fifaData) {
return fifaData.filter(function(item){
        return item["Stage"] === "Final";

    });

}

getFinals(fifaData);



/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals) {
    return getFinals(fifaData).map(function(data){
        return data["Year"];
    });

};

// // console.log(getYears(getFinals));
// function getYears(getFinals) {
//     //getFinals is callback we want to look through
//     //return all of the years in the fifadata set
//     /* code here */
//     return getFinals(fifaData);//.map(function(data){
//      // return data["Year"];
//    // });
//   }
// let getYears = getFinals => getFinals( fifaData ).map( game => game[ "Year" ] );

  console.log(getYears(getFinals));
//   getYears(getFinals);

/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinals) {
    const winners = [];
    getFinals(fifaData).forEach(function (data) {
    if (data["Home Team Goals"] > data["Away Team Goals"]) {
        winners.push(data["Home Team Name"]);
    }
    else if (data["Away Team Goals"] > data["Away Team Goals"]) {
        winners.push(data["Away Team Name"]);
    }else {
        winners.push(data["Win conditions"].split(" ")[0]);
    }
});
    return winners;

}
console.log("here");
console.log(getWinners(getFinals));
getWinners(getFinals);

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getAllWinners(getWinners, getYears) {
    let x = getWinners(getFinals);
    let y = getYears(getFinals);

    const getAllbyYear = [];

    for (let i = 0; i < x.length; i++)
        getAllbyYear.push(`In ${y[i]}, ${x[i]} won the world cup!`);

    return getAllbyYear;
}
console.log(getAllWinners(getWinners, getYears));
getAllWinners(getWinners, getYears);

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins( fifaData, initials ) 
{
    let countryName = "";
    let finals = getFinals( fifaData );

    console.log( finals );
    let winners = getWinners( getFinals );
    console.log( winners );
    
    for( let i = 0; i < finals.length; i++ )
        if( finals[ i ][ 'Home Team Initials' ]  === initials || finals[ i ][ 'Away Team Initials' ]  === initials )
        {
            countryName = ( finals[ i ][ 'Home Team Initials' ]  === initials ? finals[ i ][ 'Home Team Name' ] : finals[ i ][ "Away Team Name" ] );
            break;
        }
        
    return winners.reduce( ( val, winner ) => winner === countryName ? val + 1 : val, 0 );
};

/* Task 8: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Task 9: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();


/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();


// STRETCH 🥅 //

// Use the space below to work on any stretch goals of your chosing as listed in the README file. //