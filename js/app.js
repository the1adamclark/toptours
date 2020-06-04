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