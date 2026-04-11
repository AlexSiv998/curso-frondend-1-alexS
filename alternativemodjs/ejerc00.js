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


/*
1. El Calculador de Edad Doggy
Las mascotas envejecen diferente. Crea una variable con tu edad actual y otra que calcule cuántos años tendrías si fueras un perro (multiplicando tu edad por 7).

Operación: Multiplicación (*)
*/

let myage = 28
let doggyage = myage * 7

console.log('la edad de doggy es:', doggyage)

/*
2. Reparto de Cuenta
Imagina que fuiste a cenar con 3 amigos (4 personas en total). La cuenta salió en $120. Crea un script que calcule 
cuánto debe pagar cada uno para que la división sea exacta.

Operación: División (/)
*/

let monto = 120
let personas = 4
let totalPago = monto / personas

console.log('cada uno debe pagar', totalPago, 'dolares')

/*
Tienes 17 dulces y quieres repartirlos equitativamente entre 3 niños. No quieres romper ningún dulce, así que los que sobren te los quedas tú. ¿Cuántos dulces te sobran?

Operación: Módulo (%) — Recuerda que este te da el "residuo" de una división.
*/

let dulces = 17 
let kids = 3
let dulcepami = dulces % kids

console.log('los duces que me quedo son', dulcepami)


/*
4. Conversor de Grados
Tienes una temperatura de 25°C y quieres saber cuánto es en Kelvin. La fórmula es simple: suma 273.15 a los grados Celsius.

Operación: Suma (+)
*/

let conversorTemp = 25 + 273.15

console.log(conversorTemp)


/*
1. El Validador de "FizzBuzz" Simplificado
Crea una variable con un número. El reto es determinar si ese número es par y, al mismo tiempo, mayor a 10.

Conceptos: Módulo (%), comparación (>) y el operador lógico AND (&&).

Meta: Que el programa te devuelva true o false.
*/

let validarPar = 8

if (validarPar <= 10 ) {
  if (validarPar %2 === 0) {
    console.log('este numero es par y menor a 10')
  } else {
    console.log('este numero no es par pero si menor a 10')
  }
} else {
  console.log('este numero es impar y menor a 10')
}


/*
2. Calculadora de IVA y Total
Crea una pequeña lógica donde tengas el precioBase de un producto. Debes calcular el valor del IVA (supongamos el 21%) y sumarlo al precio original para obtener el precioFinal.

Operación: Multiplicación por decimales (0.21) y suma.

Reto extra: Usa toFixed(2) para que el resultado solo tenga dos decimales.
*/

let precioBase = 80
let porcentaje = 30 / 100 
let valorIva = precioBase * porcentaje

let precioFinal = precioBase + valorIva

console.log(precioFinal)

/*
3. Promedio de Notas con Mensaje
Imagina que tienes tres notas de un examen (ej: 7, 8 y 5). Calcula el promedio. Luego, crea una variable booleana que sea true si el promedio 
es igual o mayor a 6 (aprobado) y false si es menor.

Operación: Paréntesis para agrupar la suma (a + b + c) antes de dividir.
*/

let pedro = 13
let juan = 18
let marcel = 16
let maria = 6
let yo = 9

let promedio = (pedro + juan + marcel + maria + yo) / 5

if (promedio >= 13 ) {
  console.log('curso aprobado')
} else {
  console.log('curso reprobado')
}

/*
4. Conversor de Minutos a "Horas y Minutos"
Si tienes 145 minutos, ¿cuántas horas completas y cuántos minutos sobrantes son?

Pista: Para las horas usa Math.floor() (para obtener el entero de la división entre 60) y para los minutos restantes usa el módulo (%).

Resultado esperado: "2 horas y 25 minutos".
*/

// Ejercicios strings 

//1 y 6
/*let nameUser = 'Alex'
let mail = 'Alexpro@gmail.com'

console.log('Hola, ',`${nameUser}.`,'Tu correo es:', `${mail}.`)

//2
console.log(nameUser.length)

//3
console.log(nameUser[0])
console.log(nameUser[3])

//4
console.log(mail.toUpperCase())
console.log(mail.toLowerCase())

//5
let texEj = 
  `rapido corre, 
  el camino
  a recorrer
  `

//7

let texEj2 = "rapido corre el camino, a recorrer en la avenida"

console.log(texEj2.replaceAll(' ', '-'))

//8

console.log(texEj2.includes('corre'))

*/

// condicionales if/else/ ifelse

//1

let myname = 'juan'

if (myname === 'Alex') {
  console.log('Tu nombre es Alex')
} else {
  console.log('Tu nombre no es Alex')
}

//2

let myUser = 'pedro'
let myPassword = 'pecao1'

if (myUser === 'AlexSiv'&& myPassword === 'alexSiv1') {
  console.log('Usuario y contraseña correctos, puede ingresar')
} else if (myUser !== 'AlexSiv') {
  console.log('Usuario incorrecto')
} else if (myPassword !== 'alexSiv1') {
  console.log('contraseña incorrecta')
} 

//3


let number = 13

if (number > 0) {
  console.log('numero positivo')
} else {
  console.log('numero negativo')
}

//4

let juancho = 21

if (juancho > 18) {
  console.log('es mayor de edad, puede votar')
} else {
  console.log(`te faltan`, 18-juancho, `años para poder votal` )
}

//5
let mariaM = 12

let edad = mariaM >= 18 ? console.log('Eres mayor') : console.log('Eres menor')

//switch 1

let idioma = 'aleman'
let saludo = ''

switch (idioma) {
  case 'espanish':
    saludo = 'Hola!'
    break;
  case 'english':
    saludo = 'Hello!'
    break;
  case 'frech':
    saludo = 'Bonjour!'
    break;
  default: 
    saludo = 'debe seleccionar un idioma valido'
    break;
}

console.log(saludo)


