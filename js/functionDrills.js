"use strict";
(function (){

function isOdd(number){

}

    function isEven(number){

    }

    function identity(input){
        return input ;
    }


    function isFive(input){

    }

    function addFive(input){
return input + 5;
    }
console.log(addFive(3))
    function isMultipleOfFive(input){

    }

    function isThree(input){

    }
    function isMultipleOfThree(input){

    }

    function isMultipleOfThreeAndFive(input){

    }
    function isMultipleOf(target, n){
        if(target%n ){

        }
        console.log(isMultipleOfThreeAndFive(15,5))
}


function isTrue(boolean){

}

    function isFalse(boolean){

    }

    function isTruthy(input){

    }

    function isFalsy(input){

    }

    function isVowel(letter){

    }
    function isConstant(letter){

    }
    function isCapital(letter){

    }
    function isLowerCase(letter){

    }



//This did not work why
/*    function hasLowerCase(str){
        var str='helLO You'
if (str.toLowerCase === 'HELLO'){}
    return true;
    }
   console.log(hasLowerCase())*/

//code below worked
    function hasLowerCase(str) {
        return str.toUpperCase() != str;
    }
    console.log('HELLO',hasLowerCase('HELLO'));

function isSpace (value) {

return value.indexOf('  ')>=0;
}
var whiteSpace=isSpace('My name is');
if(whiteSpace==true){
    console.log('has space')
} else {
    console.log('no space');
}


function isZero(number){
return(number==0);
    }
console.log(isZero(0))

function notZero(num){
   return (num !== 0);

}
console.log(notZero())


    //Why does this return false
    function lowerCase(str){
    return (str =="hello");
}
    console.log(lowerCase());

function double(n){
    return n*2;
}
console.log(double(3))

function triple(n){
    return n*3;
}
console.log(triple(3))
    function quadruple(n){
    return n *4;
    }
    console.log(quadruple(4))


    function half(n){
    return n/2;
    }
    console.log(half(8))

    function subtract(a,b){
    return a-b;
    }
    console.log(subtract(6,3))

    function multiply(c,d){
    return c*d;
    }
    console.log(multiply(12,12))

    function divide(e,f){
    return e/f;
}
console.log(divide(81,9))


    function remainder(e,r){
    return e%r;
    }
    console.log(remainder(5,3))

    function modulo(s,t){
    return s%t;
    }
    console.log(modulo(12,12))

    function cube (n){
    return (n*n)*n;
    }
    console.log(cube(3))

    function squareRoot(n){
    return Math.sqrt(n) ;
    }
console.log(squareRoot(16))

    function cubeRoot(n){
    return Math.cbrt(n);
    }
    console.log(cubeRoot(27))

// needs work!
function invertSign(number){
return Math.abs(number);
}
console.log(invertSign(-10))
})()
