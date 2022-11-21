// console.log("World translator");
// let language = prompt("Please key in language to show Hello world in different language", "english");

// switch(language.toUpperCase())
// {
//     case "ENGLISH":
//         console.log("Hello World");
//         break;
//     case "FRENCH":
//         console.log("Bonjour le monde");
//         break;
//     case "MALAY":
//         console.log("Hai Dunia");
//         break;
//     default:
//         console.log("Language " + language + " not recognized.")
// }

// console.log("Grade Assignor");
// let testscore = prompt("Please ket in your test score", 78);
// if (testscore >= 80)
// {alert("Your grade is A")}
// else if (testscore >= 60)
// {alert("Your grade is B")}
// else if (testscore >= 50)
// {alert("Your grade is C")}
// else if (testscore >= 40)
// {alert("Your grade is D")}
// else
// {alert("Your grade is F")}

// console.log('Air conditioning')
// let currTemp = prompt("Please key in the current temperature", 30)
// let acFunct = prompt('Please inform whether A/C is functional', 'Y or N')
// let desiredTemp = prompt('Please key in the desired temperature', 25)

// if (acFunct == 'Y') {
//     if (currTemp > desiredTemp) {
//         console.log("Turn on the A/C Please")
//     }
// }
// else if (acFunct == 'N') {
//     if (currTemp > desiredTemp) {
//         console.log("Fix the A/C now! It's hot!")
//     }
//     else {
//         console.log("Fix the A/C whenever you have the chance... It's cool...")
//     }
// }
// else {
//     console.log("A/C does not exist")
// }

// console.log("Government voting age");
// let age = prompt("Please key in your age", 20);

// if (age >= 35)
// {alert("You can vote AND hold any place in government!")}
// else if (age >= 25)
// {alert("You can vote AND run for the Senate!")}
// else if (age >= 18)
// {alert("You can vote!")}
// else
// {alert("You can't vote yet!")}

// console.log("Golf scoring system")
// function golfScore(par, strokes) {
//     if (strokes == 1) return "Hole-in-one!";
//     else if (strokes <= par - 2) return "Eagle";
//     else if (strokes === par - 1) return "Birdie";
//     else if (strokes === par) return "Par";
//     else if (strokes === par + 1) return "Bogey";
//     else if (strokes === par + 2) return "Double Bogey";
//     else if (strokes >= par + 3) return "Go Home";

//     return "Change Me";
// }
// golfScore(5, 4);

// console.log("Serge says")
// let message = prompt('Type in your message', 'something')

// let lastChar = message.charAt(message.length - 1)
// let upperChar = message.toUpperCase()

// if (lastChar == "?") {
//     console.log('Sure.')
// }
// else if (message == upperChar && message.length != 0) {
//     console.log('Woah, chill out!')
// }
// else if (message.length == 0) {
//     console.log('Fine. Be that way!')
// }
// else {
//     console.log("Whatever.")
// }

// console.log('Pluralizer')
// let word = prompt('Type in your word to be pluralize', 'something')

// let last1Char = word.charAt(word.length - 1)
// let last2Char = word.charAt(word.length - 2)

// if (word.endsWith('x') || word.endsWith('s') || word.endsWith('z') || word.endsWith('ch') || word.endsWith('sh')) {
//     console.log('Plural : ' + word.concat("es"))
// }
// if (word.endsWith('y')) {
//     if (word.endsWith('ay') || word.endsWith('ey') || word.endsWith('iy') || word.endsWith('oy') || word.endsWith('uy')) {
//         console.log('Plural : ' + word.concat('s'))
//     }
//     else {
//         console.log('Plural : ' + word.replace('y', 'ies'))
//     }

// }

console.log('Rock, papers, scissors')
let scoreP1 = 0
let scoreP2 = 0

function singleGame(player1, player2) {
    //     if player1 is rock and player2 is paper, then decrement noOfWin
    // else if player1 is rock and player2 is scissors, then increment noOfWin
    // else if player1 is rock and player2 is rock, then tie

    // if player1 is paper and player2 is scissor, then decrement noOfWin
    // else if player1 is paper and player2 is rock, then increment noOfWin
    // else if player1 is paper and player2 is paper, then tie

    // if player1 is scissor and player2 is rock, then decrement noOfWin
    // else if player1 is scissor and player2 is paper, then increment noOfWin
    // else if player1 is scissor and player2 is scissor, then tie

    let upPlayer1 = player1.toUpperCase()
    let upPlayer2 = player2.toUpperCase()

    let result = ''

    switch (upPlayer1) {
        case "ROCK":
            if (upPlayer2 == 'PAPER') { result = "LOSE"; scoreP1--; scoreP2++; }
            else if (upPlayer2 == 'SCISSOR') { result = "WIN"; scoreP1++; scoreP2--; }
            else { result = 'TIE' }
            break;
        case "PAPER":
            if (upPlayer2 == 'SCISSOR') { result = "LOSE"; scoreP1--; scoreP2++; }
            else if (upPlayer2 == 'ROCK') { result = "WIN"; scoreP1++; scoreP2--; }
            else { result = 'TIE' }
            break;
        case "SCISSOR":
            if (upPlayer2 == 'ROCK') { result = "LOSE"; scoreP1--; scoreP2++; }
            else if (upPlayer2 == 'PAPER') { result = "WIN"; scoreP1++; scoreP2--; }
            else { result = 'TIE' }
            break;
        default:
            console.log("Paramter not recognized, invalid game")
    }
    console.log(upPlayer1, ' vs ', upPlayer2, '=', result)
}

// singleGame('rock', 'paper', 0, 0)
// singleGame('rock', 'rock', 0, 0)
// singleGame('rock', 'scissor', 0, 0)
// singleGame('paper', 'paper', 0, 0)
// singleGame('paper', 'rock', 0, 0)
// singleGame('paper', 'scissor', 0, 0)
// singleGame('scissor', 'paper', 0, 0)
// singleGame('scissor', 'rock', 0, 0)
// singleGame('scissor', 'scissor', 0, 0)

// Out of 3 game
singleGame('scissor', 'paper')
singleGame('paper', 'scissor')
singleGame('scissor', 'rock')

if (scoreP1 > scoreP2) { console.log("Player 1 wins !") }
else {
    if (scoreP1 == scoreP2) {
        console.log("It's a TIE!")
    }
    else {
        console.log("Player 2 wins")
    }
}