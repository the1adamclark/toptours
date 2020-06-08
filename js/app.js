'use strict';


console.log('Thank you for the input!');
var yourVote = prompt('What is your favorite type of music?');
// var hourNow = prompt('What time is it now?, 0-23');
//variable declaration.
var greeting;
if(hourNow >= 18 && hourNow < 24){
    greeting = 'good evening, ' + userName + ' !';
} else if (hourNow > 12 && hourNow < 18){
    greeting = 'Good afternoon '+ userName + ' !';
} else if (hourNow >= 0 && hourNow <= 12) {
    greeting = ' Good Morning ' + userName;
} else {
    greeting = ' Hello, how are ya? ';
}
console.log(userName + ' ' + hourNow + ' ' + greeting);


document.write('<h1 style="color:yellow; font-size: 50px; background-color:blue;">' + greeting + '</h1>');


var header = document.getElementById('removeThis');
//header.remove();



//first function 
function firstFunction(){

}

console.log('This file is connected!');

function welcomeSign(){


    var userName = prompt('What is your name?');
    while(userName == ''){
        userName = prompt('Please enter your name');
    }
    if (userName == null){
        userName = 'who';
    } else {
        userName = 'if '+ userName;
    }
    var userName = 'Click the link to see '+ userName + ' made the list';

    return results;
}
var results = welcomeSign();



function guessingGame(){


    var favorite = prompt('What music do you love to listen to');
    while(favorite == ''){
        favorite = prompt('What music do you love to listen to');
    }
    if (favorite == null){
        favorite = 'who';
    } else {
        favorite = 'if '+ favorite;
    }
    var results = 'Click the link to see '+ favorite + ' made the list';

    return results;
}
var results = guessingGame();


document.getElementById('button').innerHTML = results;

