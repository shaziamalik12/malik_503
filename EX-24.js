//Tests for equality and inequality with strings

//Example :

let user_age = "27";

if(user_age === 9){
    console.log(` Tests for equality with strings is "true"`);
}else{
    console.log(` Tests for equality with strings is "false"`);
}

//Example :
let a = "7";
let b = "2";

if (a !== b){
    console.log(` Tests for inequality with strings is "true"`);
}else{
    console.log(` Tests for inequality with strings is "false"`);
}

//Tests using the lower case function
//Example 
let user_name = "saba";

if(user_name === "sajda"){
    console.log(` Strings are equals`);
}else{
    console.log(` Strings are not equal`);
}


//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//Example :
let num1 = 4;
let num2 = 4;

if (num1 === num2){
    console.log(` Numbers are equal`);
}else{
    console.log(` Numbers are not equal`);
}

//Example :
let num3 = 97;
let num4 = 15;

if (num3 === num4){
    console.log(` Numbers are equal`);
}else{
    console.log(` Numbers are not equal`);
}

//Example :
if(num4 > num3){
    console.log(` ${num4} is greater than ${num3}`);
}else{
    console.log(` ${num4} is not greater than ${num3} `);
}

//Example :
if(num3 < num4){
    console.log(` ${num3} is less than ${num4}`);
}else{
    console.log(`${num3} is not less than ${num4}`);
}

//Example :
if(num3 <= num4){
    if(num3===num4)
    console.log(`${num3} is  equal to ${num4}`);
    else{    console.log(`${num3} is less than  ${num4}`);
}
}else{
    console.log(` ${num3} greater than ${num4}`);
}

//Example :
if(num1 >= num2){
    if(num1===num2)
    console.log(`${num1} is  equal to ${num2}`);
    else{    console.log(`${num1} is greater than  ${num4}`);
}

}else{
    console.log(` ${num1} is less than ${num2}`);
}


//Tests using "and" and "or" operators
//Example :

if(num1 == num2 && num3 < num4){
    console.log(` All conditions are True for an AND operator.`);
}else{
    console.log(` All conditions are not True for an AND operator.`);
}

//Example :

if(num1 != num2 && num3 < num4){
    console.log(` All conditions are True for an AND operator.`);
}else{
    console.log(` All conditions are not True for an AND operator.`);
}

//Example : 
if(num1 != num2 || num3 < num4){
    console.log(` Any one condition is True for an OR operator.`);
}else{
    console.log(` No condition is True for an OR operator.`);
}

//Example 
if(num1 != num2 || num3 > num4){
    console.log(`Any one ondition is True for an OR operator.`);
}else{
    console.log(` No condition is True for an OR operator.`);
}

//Test whether an item is in array
//Example 

let arr = ["1", "7", "8"];

if (arr.includes("7")){
    console.log(` Item found in Array`);
}else{
    console.log(` Item doesnot found in Array`);
}

//Test whether an item is not in an array
//Example :

let arr2 = ["r", "s", "t"];

if (arr.includes("q")){
    console.log(` Item found in Array`);
}else{
    console.log(`Item doesnot found in Array`);
}