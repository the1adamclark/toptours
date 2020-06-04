'use strict';
console.log('This file is connected!');


function guessingGame(){

    var results;
    var favorite = prompt('What music do you love to listen to');

    var pick = prompt('Is your favorite musician on the list?');
    //variable declaration


    if (pick == 1) {
        results = 'good job!';
    } else if (pick == 2) {
        results = 'almost!';
    } else if (pick == 3) {
        results = ' nope!';
    } else {
        results = 'rockstar ';
    }

    return results;
}
var results = helloMsg();


//console.log(`${results} ${pick} ${bestBand}`);

console.log(results);

document.write(results);
