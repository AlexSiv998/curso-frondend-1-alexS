// respuestas

/*
1. // esto es un comentario de una linea
2. /* 
  esto
  es un 
  comentario
  de muchas
  lineas 

*/

//3

let myName = "Juan Ferreo"
let userName = 'Esta es la historia de Juan Ferrero, fin'

let age = 38
let day = 800/30

let imDev = false
let imStudent = true

let thisValorUndefined = undefined

let thisValorNull = null

let theSymbol = Symbol

let theBigind = 6874215315315381354561613213212n

//4
console.log(myName)
console.log(userName)
console.log(age)
console.log(day)
console.log(imDev)
console.log(imStudent)
console.log(thisValorUndefined)
console.log(thisValorNull)
console.log(theSymbol)
console.log(theBigind)

//5
console.log(typeof myName)
console.log(typeof userName)
console.log(typeof age)
console.log(typeof day)
console.log(typeof imDev)
console.log(typeof imStudent)
console.log(typeof thisValorUndefined)
console.log(typeof thisValorNull)
console.log(typeof theSymbol)
console.log(typeof theBigind)

const theName = ('superuser')
const theNumer = 3.14
const thisIsReal = false


// Respuestas de los ejercicios de operaciones

//1.

let num1 = 30
let num2 = 5

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)
console.log(num1 ** num2)

//2
console.log(num1 += 6)
console.log(num1 -= num2)
console.log(num1 *= num2)
console.log(num1 /= num2)
console.log(num1 %= num2)
console.log(num1 **= num2)

/*//3
console.log(num1 < num2)
console.log(num1 <= num2)
console.log(num1 === 1)
console.log(num2 >= num1)
console.log(num1 == '1')*/

//4
/*
console.log(num1 = num2)
console.log(num1 <= num2)
console.log(num2 === num1)
console.log(num1 >= num2)
console.log(num2 == num1)*/

//5
console.log (num1 > num2 && num1 == 1)
//6
console.log (num1 > num2 || num1 == 1)
//7
console.log (num1 > num2 || num1 == 1 && num1 <= num2)
//8 y 10
let negative = !(num1 > num2 || num1 == 1)

console.log (negative);

let logroEntender = true

logroEntender ? console.log(' si logre entender') : console.log(' no logre entender')
