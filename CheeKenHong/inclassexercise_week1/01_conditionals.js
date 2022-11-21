//Write an if statement that compares two numbers (call them numOne and numTwo).
//If numOne is bigger, it should log to the console "numOne (THE VALUE) is bigger than numTwo (THE VALUE)".
//If numTwo is bigger, it should log to the console "numOne (THE VALUE) is smaller than numTwo (THE VALUE)".
//If they are even, it should log to the console "numOne (THE VALUE) is equal to numTwo (THE VALUE)".

let num1 = 12;
let num2 = 24;

if (num1 > num2)
{
    console.log("num1 " + num1.toString() + " is bigger than num2 " + num2.toString())
} 
else if (num2 > num1)
{
    console.log("num1 " + num1.toString() + " is bigger than num2 " + num2.toString())
}
else if (num1 === num2)
{
    console.log("num1 " + num1.toString() + " is equal to num2 " + num2.toString())
}

console.log("Driving age 16");
let keyin_age = prompt("Key in your driving age", "16");
if (keyin_age >= 16)
{
    console.log("Drive into the sunset !")
}
else
{
    let valid_age = 16
    let diff = valid_age - keyin_age;
    console.log("Sorry, you still have " + diff.toString() +  " years before you can drive")
}   