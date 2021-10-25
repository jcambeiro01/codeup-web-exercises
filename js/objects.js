(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
var person = {};
person.firstName='Jonathan'
person.lastName='Cambeiro'
console.log(person.firstName)
    console.log(person.lastName)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
person.hello=function (){
    alert('Hello'+ person.firstName + person.lastName)
}
person.hello();
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

shoppers.forEach(function (shopper){
    if(shopper.amount>200)
       {
           console.log(shopper.name + 'This is your new total' + ((shopper.amount) - (shopper.amount * .12)));
       }
    })


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            Book: "It",
            PublishedYear: "Sep. 15, 1986",

           Author: {
               firstName: "Stephen",
                lastName: 'King',
            }
        },
        {
            Book: "The Stand",
            PublishedYear: "Oct. 3, 1978",

            Author: {
                firstName: "Stephen",
                lastName: 'King',
            }
        },
        {
            Book: "The Shinning",
            PublishedYear: "Jan. 28, 1977",

            Author: {
                firstName: "Stephen",
                lastName: 'King',
            }
        },
        {
            Book: "Carrie",
            PublishedYear: "Apr. 5, 1974",

            Author: {
                firstName: "Stephen",
                lastName: 'King',
            }
        },
        {
            Book: "Misery",
            PublishedYear: "Jun. 8, 1987",

            Author: {
                firstName: "Stephen",
                lastName: 'King',
            }
        }

    ];

    console.log("The first book is  " + books[0].Book + ' ' + books [0].PublishedYear + " .");
console.log('It was Written by ' + books[0].Author.lastName +','+ books[0].Author.firstName)

    console.log("The second book is  " + books[1].Book + ' ' + books [1].PublishedYear + " .");
    console.log('It was Written by ' + books[1].Author.lastName +','+ books[1].Author.firstName)

    console.log("The third book is  " + books[2].Book + ' ' + books [2].PublishedYear + " .");
    console.log('It was Written by ' + books[2].Author.lastName +','+ books[2].Author.firstName)

    console.log("The fourth book is  " + books[3].Book + ' ' + books [3].PublishedYear + " .");
    console.log('It was Written by ' + books[3].Author.lastName +','+ books[3].Author.firstName)

    console.log("The fith book is  " + books[4].Book + ' ' + books [4].PublishedYear + " .");
    console.log('It was Written by ' + books[4].Author.lastName +','+ books[4].Author.firstName)

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
function createBook(title, author){
    return [0];
    }
})();
