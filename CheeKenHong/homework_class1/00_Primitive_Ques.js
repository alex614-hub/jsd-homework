/*console.log("Age calculator");

const d = new Date();
let curr_year = d.getFullYear();
let input_year = prompt("Please input birth year", "1991");

let age = curr_year - input_year;
console.log("You are " + age +  " years old");
alert("You are " + age + " years old");*/

/*console.log("Lifetime supply calculator");
const max_age = 99;
const amt_day = 3;

let curr_age = prompt("Please key in your age", 31);
let total = (max_age - curr_age) * amt_day;

alert("You will need " + total + " to last you until the ripe old age of " + max_age);
console.log("You will need " + total + " to last you until the ripe old age of " + max_age);
*/

/*console.log("The Geometrizer");
let radius = prompt("Please key in the radius to calculate the circumference and area");
let circumference = radius * 2 * Math.PI;
let area = radius * radius * Math.PI;

alert("For radius of : " + radius + " Circumference = " + circumference + " and Area = " + area);
console.log("For radius of : " + radius + " Circumference = " + circumference + " and Area = " + area);*/

console.log("Temperature converter");
let input_farenheit = prompt("Input fahrenheit to convert to celcius",108);
let input_celcius = prompt("Input celcius to convert to fahrenheit", 32);

let convert_celcius = (input_farenheit-32)/1.8;
let convert_fahren = (input_celcius*1.8)+32;
alert("Converted celcius of " + input_farenheit + " is : " + convert_celcius);
alert("Converted fahrenheit of " + input_celcius + " is : " + convert_fahren);
console.log("Converted celcius of " + input_farenheit + " is : " + convert_celcius);
console.log("Converted fahrenheit of " + input_celcius + " is : " + convert_fahren);
