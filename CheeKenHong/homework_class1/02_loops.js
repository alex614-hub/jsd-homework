// console.log("even/odd reporter");
// for(cnt=0; cnt<=20; cnt=cnt+1)
// {
//     if (cnt % 2 === 0)
//     {console.log(cnt + " is even.")}
//     else
//     {console.log(cnt + " is odd.")}
// }

// console.log("multiplier");
// for(cnt=1; cnt<=12; cnt=cnt+1)
// {
//     for(cnt2=1; cnt2<=12; cnt2=cnt2+1)
//     {
//         console.log(cnt + "*" + cnt2 + "=" + (cnt * cnt2))
//     }
// }

// console.log("Score grader");
// for(testscore=50; testscore<=90; testscore=testscore+1)
// {
//     if (testscore >= 80)
// {console.log("For " + testscore + ", You got an A")}
// else if (testscore >= 60)
// {console.log("For " + testscore + ", You got an B")}
// else if (testscore >= 50)
// {console.log("For " + testscore + ", You got an C")}
// }

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
// console.log(golfScore(5, 4));

// for (par = 3; par <= 5; par++) {
//     for (i = 1; i <= 8; i++) {
//         console.log("Par = " + par + " strokes = " + i + " Nickname = " + golfScore(par, i))
//     }
// }

// console.log("99 bottles of beer")
// function pluralWord(word, count) {
//     if (count > 1) { return count + ' ' + word.concat('s') }
//     else {
//         if (count != 1) {
//             return 'no more bottles'
//         }
//         else {
//             return count + ' ' + word
//         }
//     }
// }

// // 99 bottles of beer on the wall, 99 bottles of beer.
// // Take one down and pass it around, 98 bottles of beer on the wall.
// for (i = 99; i >= 1; i--) {
//     let j = i - 1
//     console.log(pluralWord('bottle', i), 'of beer on the wall,', pluralWord('bottle', i), 'of beer.')
//     console.log('Take one down and pass it around,', pluralWord('bottle', j), 'of beer on the wall.')
// }

// console.log('No more bottles of beer on the wall, no more bottles of beer.')
// console.log('Go to the store and buy some more, 99 bottles of beer on the wall.')