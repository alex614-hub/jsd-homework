console.log("Hello World!");

// addition
//console.log(15+29);

// division
//console.log(15/5);

//1. Convert a string into a number (e.g. "4" into 4)?
console.log("Question 1 : Convert a string into a number (e.g. ''4'' into 4)?")
let myvalue = "4";
console.log("Before Convert string to number " + myvalue + " datatype :" + typeof(myvalue) );
let ivalue = Number(myvalue);
console.log("After Convert string to number " + ivalue + " datatype :" + typeof(ivalue) );

//2. Convert a number into a string (e.g. 15 into "15")?
console.log("Question 2 : Convert a number into a string (e.g. 15 into ''15'')")
let orivalue = 15;
console.log("Before Convert string to number " + orivalue + " datatype :" + typeof(orivalue) );
let aftconv = orivalue.toString();
console.log("After Convert string to number " + aftconv + " datatype :" + typeof(aftconv) );

//3. Make a string uppercased (e.g. "hello" into "HELLO")?
console.log("Question 3 : Make a string uppercased ")
let lowerstr = "something";
console.log("Before Change : " + lowerstr + " After Uppercased : " + lowerstr.toUpperCase());

//4. Get the second character out of a string (e.g."hello" returns "e")?
console.log("Question 4 : Get second character out of a string ")
let strHello = "Hello";
console.log("Original word : " + strHello + " 2nd character : " + strHello.charAt(1));

//5. Use concatenation to combine two strings (e.g. join "Hello " and "World")?
console.log("Question 5 : Concatenation to combine two strings");
let str1 = "Hello";
let str2 = "World";
console.log(str1 + str2);
console.log(str1, str2);
console.log(str1.concat(str2));

//6. Get a number and square it (e.g. 4 squared is 16)?
console.log("Question 6 : assign number and squareroot")
let num1 = 4;
console.log(Math.pow(num1,2));
console.log(num1**2);
console.log(num1*num1);

//7. Get the square root of a number (e.g. square root of 25 is 5)?
console.log("Question 7 : get square root of number")
let num2 = 25;
console.log("Original value : " + num2 + " After squareroot : " + Math.sqrt(num2));