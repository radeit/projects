"use strict";

// Object, expression, statement

// var, let ,const

// Objects:
// {
//     key:value 
// }


let a = 10;
a = 'Labas';
console.log(a);

let $ = 'Kazkas';
console.log($);


// let 1name = 'Tomas';
// identifier starts immediately after

// camelCase (variables, functions);
function myFuntion(){

}
let UserRegName = 'Tomas';
// PascalCase (Classes)
String;

// CONSTANT_CASE (constants)
const RED_COLOR = 'FF0000#';
const PI_NUMBER = 3.1428;


let age = 25;
console.log(age);
age = 32;
console.log(age);

// const color = "RED"
// console.log(color);
// color = "GREEN";

// const carModel;
// console.log(carModel);

// Scope
// console.log(dogName);
let dogName = "Tuzikas"

{
    let dogName = "Reksas"
    console.log(dogName);
}

console.log(dogName);

// function myDog(){

//     dogName = "Katinas"
// }
// console.log(dogName);

// --------------------------------------------------- //

// Boolean: false (0), true(1 arba ne 0!)

let boolexp = 1 > 0;
console.log(boolexp);

// Number: 1, 1.5, 1/2, ...

let decNumber = 10;
console.log(decNumber);

let realNumber = 10.538;
console.log(realNumber);
//Number --> Precision -2^53 + 1 to 2^52 - 1

// BigInt
let bigNumber = 10n;

//String '', "", ``

let text = 'It is ';
let animalName =`${text}Papuga`;
console.log(animalName);
console.log(`${animalName}` + ' afrikoj')

// undefined
let nothing;
console.log(nothing);
// null
nothing = null;
console.log(nothing);

// symbol
// ???

// casting
let castString = 10;
console.log(typeof String(castString));
// Converison to String
console.log(10 + '10');
// Conversion to Number
console.log(10 +  Number('10'));
console.log('10'/2);
console.log(2/'10');
console.log(10/0);
console.log(0/10);
console.log('I am a cat'/0);
console.log(NaN/NaN);
console.log(NaN/0);
console.log(Infinity/NaN);
console.log(Infinity/Infinity);

// Convert to boolean

console.log(typeof( 1 > 0));