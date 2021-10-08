console.log("Hello from external JavaScript");
alert("Welcome to my webSite!");

var favoriteColor = prompt("What is your Favorite Color ?");
alert("Wow! " + favoriteColor + " is my Favorite Color as well! ");

var price = 3;
var littleMermaide = parseInt(prompt("How many days will you be renting The Little Mermaide for?"));
alert("Thanks for shopping with us! Based on your choice your total is" + littleMermaide*price);
var brotherBear = parseInt(prompt("How many days will you be renting Brother Bear for"));
alert("Thanks for shopping with us! Based on your choice your total is" + brotherBear*price);
var Hercules = parseInt(prompt("How many days will you be renting Hercules for"));
alert("Thanks for shopping with us! Based on your choice your total is" + Hercules*price);
alert("Your total is " +( brotherBear + littleMermaide +Hercules)*price);

var fbRate = 350;
var AmRate = 380;
var GooRate = 400;
var FBHours = parseInt(prompt("How many hours did you work at Facebook this week?"));
alert("based on your respons your Facebook pay for this week should be" + FBHours*fbRate)
var AmHours = parseInt(prompt("How many hours did you work at Amazon this week?"));
alert("based on your respons your Facebook pay for this week should be" + AmHours*AmRate)
var GooHours = parseInt(prompt("How many hours did you work at Google this week?"));
alert("based on your response your Facebook pay for this week should be" + GooHours*GooRate)
var totalFb = FBHours*fbRate;
var totalAm = AmHours*AmRate;
var totalGoo= GooHours*GooRate;
var total= (totalFb+totalAm+totalGoo);
alert("Your total is"+ total);



var isClassFull = confirm ("Is the class you chose full?");
var scheduleConflict =confirm ("Does the class schedule conflict with your current schedule?");
alert("Student can register:" + (!isClassFull && !scheduleConflict));

var isMember = confirm("Do you have your card?");
var howManyItems = parseInt(prompt("How many items in your cart"?));
var isOfferValid = confirm("[Wait] is the offer valid? [Manager confirmation required]");
var discountApplied = isOfferValid && (howManyItems >=2 || isMember);

alert("discount applied: " + discountApplied);