console.log('Work with arrays')
let rainbowColors = []
rainbowColors.push("orange")
rainbowColors.unshift("red")
rainbowColors.push("yellow")
rainbowColors.push("green", "blue", "indigo", "violet")
console.log(rainbowColors.length)
console.log(rainbowColors[1])
console.log(rainbowColors.length - 1)
console.log(rainbowColors.indexOf("blue"))

let random = ["plus", "minus", "divide", "modulo", "even"]
console.log("My first choice is " + random[0]);
console.log("My second choice is " + random[1]);
console.log("My third choice is " + random[2]);
console.log("My fourth choice is " + random[random.length - 2]);
console.log("My fourth choice is " + random[random.length - 1]);

// const bookSeries = {
//     name: "In Search of Lost Time",
//     author: "Marcel Proust",
//     rating: 5,
//     books: [
//         "Swann's Way",
//         "In the Shadow of Young Girls in Flower",
//         "The Guermantes Way",
//         "Sodom and Gomorrah",
//         "The Prisoner",
//         "The Fugitive",
//         "Time Regained"
//     ]
// };

// for (let i = 0; i < bookSeries.books.length; i++) {
//     console.log(bookSeries.books[i]);
// }