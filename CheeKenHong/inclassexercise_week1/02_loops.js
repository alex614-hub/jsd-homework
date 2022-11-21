
console.log("Log every number from 0 to 10");
for (cnt=0; cnt <= 10; cnt = cnt+1)
{
    console.log(cnt)
}

console.log("");
console.log("Log every number from 4 to -16");
for (cnt=4; cnt >= -16; cnt = cnt-1)
{
    console.log(cnt)
}

console.log("");
console.log("Log every 4th number from 8 to 41");
for (cnt=8; cnt <= 41; cnt = cnt+4)
{
    console.log(cnt)
}

console.log("");
console.log("Classic fizzbuzz program");
for (cnt=0; cnt <= 100; cnt = cnt+1)
{
    let divide3 = cnt % 3;
    let divide5 = cnt % 5;
    if (divide3 === 0)
    {
        console.log("Fizz" + cnt)
    }
    if (divide5 === 0)
    {
        console.log("Buzz" + cnt)
    }
    if ((divide3 === 0) && (divide5 === 0))
    {
        console.log("FizzBuzz" + cnt)
    }
    
}