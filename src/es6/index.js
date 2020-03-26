//Default Parameters

function myFunction(name, age, country) {
  let name = name || "Daniel"
  let age = age || 32
  let country = country || "México"
  console.log(name, age, country)
}

// EcmaScript6

function myFunction2(name = 'Daniel', age = 32, country = 'México') {
  console.log(name, age, country)
}

myFunction2()
myFunction2('Amanda', 17, 'México')
//End of default parameters
//Begin of concatenation
let hello = 'Hello'
let world = 'world'
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)
//ecmaScript
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)
//End of concatenation
//Begin of line breaks
let phrase1 = "Esto es una frase que \n" + "vamos a concatenar y saltar linea"
// ecmascript
let phrase2 = `Esto es una frase que en efecto 
vamos a concatenar`
console.log(phrase1)
console.log(phrase2)
// End of line breaks
// Begin of descompotition
let human = {
  'name': 'Daniel',
  'age': 18,
  'country': 'MX'
}
console.log(human.name, human.age, human.country)
let { name, age, country } = human //we asign inside the parenthesis the elements that we know exists inside the element that we're going to descompose
console.log(name, age, country)
// End of descompotition
// Propagation operators
let team1 = ['Daniel', 'Ximena', 'Zara']
let team2 = ['Amanda', 'Jimena', 'Sofia']
let togetherAgain = ['Roxi', ...team1, ...team2]
console.log(togetherAgain)
// End of Propagation operators
// Variable's assignament
{
  var globalVar = 'Global var'
}
console.log(globalVar)
{
  let globalLet = 'Global let' //Let solo permite la existencia de la variable en un
  console.log(globalLet)       //entorno local a diferencia de var que lo permite globalmente
}

const a = 'b' //las constantes no pueden cambiar sus valores determinados, for read only
console.log(a)
// end
// Propiedad de objetos mejorada
let nameNew = 'Daniel'
let ageNew = 18
let obj = { name: nameNew, age: ageNew }
console.log(obj)
//ecmascript6
let obj2 = { nameNew, ageNew } //asigna el nombre de la variable a la llave y el valor al valor
console.log(obj2)
//end
// arrow function sintaxys más reducida y un this que no esta vinculado
let names = [
  {name:'Daniel', age:18},
  {name:'Amanda', age: 17}
]
let showNames = names.map(function(item) {
  console.log(item.name)
})
//ecmascript
let showNames2 = names.map(item => console.log(item.name))
//end
//Promises
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve("Hey tamos de vuelta")
    } else {
      reject("Hey no estamos de vuelta")
    }
  })
}

// helloPromise()
//   .then(response => console.log(response))
//   .catch(error => console.log(error))

//end
// clases
 class calculator {
   constructor() {
     this.valueA = 0
     this.valueB = 0
   }
   sum(valueA, valueB) {
     this.valueA = valueA
     this.valueB = valueB
     return this.valueA + this.valueB
   }
 }

 const calc = new calculator()
 console.log(calc.valueA, calc.valueB)
 console.log(calc.sum(7,8))
 console.log(calc.valueA, calc.valueB)

//end
//import and export, working with modules
// import { hello } from './module' ***************** CHECK
// hello() ****************************************** CHECK
//end

//generators
function* helloWorld() {
  if(true) {
    yield 'Hey';
  }
  if(true) {
    yield 'tamos de vuelta';
  }
}

const heyTamosDeVuelta = helloWorld()      //     OUTPUT
console.log(heyTamosDeVuelta.next().value) // 'Hey'
console.log(heyTamosDeVuelta.next().value) // 'Tamos de vuelta'
console.log(heyTamosDeVuelta.next().value) // undefined