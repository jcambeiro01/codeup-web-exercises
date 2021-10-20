"use strict";
(function (){
    var multipliedNum = 2;
    while (multipliedNum <= 65536){

        console.log(multipliedNum);
        multipliedNum*=2;
    }



// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("Opening up shop! I've got" + allCones + " cones to sell!");
do {
    // This expression will generate a random number between 1 and 5
    var conesToBuy = Math.floor(Math.random() * 5) + 1;
    if (conesToBuy <= allCones) {
        allCones -= conesToBuy;
        console.log("Customer wants to buy" + conesToBuy + "Cones i have" + allCones + "cones left in stock");
    } else {
        console.log("sorry pal, we cant sell you"+ conesToBuy +
        "cones. We only have" + allCones + "cones left in stock!")

    }
}while (allCones !== 0)
console.log("Closing up Shop!");
})();