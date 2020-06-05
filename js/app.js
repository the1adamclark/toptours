'use strict';
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
