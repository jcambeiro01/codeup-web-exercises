
function returnSeven() {
   return 7;

}
console.log(returnSeven());

if (false){
    console.log("Am I Seen?");
} else {
    console.log("What about me?");
}

var hadBreakfast = Boolean(Math.round(Math.random()));

var hadBreakfastMessage = (hadBreakfast )? "Yes hurray for me!" : "No and that makes me sad!";
console.log(hadBreakfast)
console.log(hadBreakfastMessage)

/*
Write a function called 'typeCheck' that takes an input and returns a string of the data type entered. If the data type is a string, return the string "Haha, it's a string of string!"
Tests:
typeCheck('')
typeCheck(isNaN());
typeCheck(!false * 3);
typeCheck(4 + '4');
*/


function typeCheck (imput){
    if (typeof imput === "string"){
        return 'haha it\'s a string of a string';
    } else {
        return typeof  imput;
    }
}

console.log(typeCheck(''));
console.log(typeCheck(isNaN()));
console.log(typeCheck(!false * 3));
console.log(typeCheck(4 + '4'));

//fizz buzz challenge not my code found while searching what the fizz buzz challenge is...
for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
//shorter cleaner code for fizzbuzz challenge
//figure out the bottom code meaning of symbols
for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)


//morning exercise10-20 Wednsday

function secondToLast(arr){
    return arr [arr.length-2];

}
console.log(secondToLast(["first","Second","third"]));


//morning Warmup 10-21-21 Thursday
function moveToEnd (arr){
    var removedElement= arr.shift();
    arr.push(removedElement);
   return arr;

}


var Arbok= {Name:'Arbok',
    type:'snake',
    feet:11,
    inches:6,
    weight:'143.3lbs',
    category:'Cobra',
    Abilities:'shed skin',
    Type:'Poison',
    Weakness:['Psychic','Ground']

}
var wrestlers = [
    {
        name: "Bret Hart",
        nationality: "Canadian"
    }, {
        name: "Shawn Michaels",
        nationality: "American"
    }, {
        name: "Christian Cage",
        nationality: "Canadian"
    }, {
        name: "Keiji Mutoh",
        nationality: "Japanese"
    }, {
        name: "Eddy Guerrero",
        nationality: "American"
    }, {
        name: "Owen Hart",
        nationality: "Canadian"
    }
];

function filterForCanadians(arr){
    var bucket=[];
arr.forEach(function (element){
    if(element.nationality === 'Canadian'){
        bucket.push(element);
    }
});
return bucket;
}
// console.log(filterForCanadians(wrestlers));
// function calcArea (area){
// var circle =(radius * radius * Math.PI) {
//     radius:36
//         return area;
// }
// }
// console.log(calcArea(5))



var groceries = [
    {
        name: "carrots",
        quantity: 5
    },{
        name: "yams",
        quantity: 50
    },{
        name: "oranges",
        quantity: 9
    },{
        name: "onions",
        quantity: 2
    },{
        name: "cucumbers",
        quantity: 6
    },{
        name: "potatoes",
        quantity: 8
    }
];
function highestQuantity(arr) {
   var obj ={
       name:'Something',
       quantity:0
   }
arr.forEach(function (el){
       if (el.quantity>obj.quantity){
           obj = el;
       }
    });
return obj;
}

console.log(highestQuantity(groceries));