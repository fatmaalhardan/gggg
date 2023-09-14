//Question 1: Write a for loop in JavaScript that prints the numbers from 1 to 10.
for(i=1; i<=10; i++){
    console.log(i)
}
/* Question 2: Write a for loop in JavaScript 
 that prints the even numbers from 2 to 20.
 */
console.log("\n")
 for(i=1; i<=20; i++){
   if(i%2==0)
    console.log(i)
}

console.log("\n")

/*
for (i =2; i<=20; i = i+2)
{
    console.log(i)
}
*/

//Question 3: Write a while loop in JavaScript that calculates the sum of all integers from 1 to 100.
let x =0
let sum=0
while (x<= 100){
    sum=sum+x
    x++
}
console.log(sum)
//Question 4 🌶️🌶️🌶️: Write a for loop in JavaScript that iterates through an array of numbers and calculates their sum.

let f =[3,6,8,9] // 26

let Fatma=0
for (i=0 ; i <= f.length-1 ; i++){
    Fatma=f[i]+Fatma
    
}
console.log(Fatma)