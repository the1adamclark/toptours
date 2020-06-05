'use strict';
console.log('This file is connected!');


function guessingGame(){

    var results;
    var favorite = prompt('What music do you love to listen to');
    if (favorite = !null) {
        results = 'Click the link to see if you favorite made the list';
    } else {
        results = 'PLEASE TYPE IN YOUR FAVORITE BAND OR MUSICIAN';
    }

    return results;
}
var results = guessingGame();


//console.log(`${results} ${pick} ${bestBand}`);

console.log(results);

document.write(results);
