'use strict';
console.log('This file is connected!');


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
