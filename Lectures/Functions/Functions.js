"use strict"

function todaysDate(greeting){
    return greeting + Date();

}
var date =todaysDate(" Today's date is:");
console.log(date);

function  echo(phrase){
    return phrase + " " + phrase
}
console.log (echo("hello!"));
console.log (echo(echo("hello!")));

var sayBye = function (name){
    return'Goodbye' + name;
}
console.log(sayBye('Jonathan'))

function  findHypotenuse(a, b){

    var result;
    result = Math.sqrt((a * a) + (b * b))
    return result;

}
console.log(findHypotenuse(4, 5))

function printFour (){
    return "four";
}
console.log(printFour())
