const data = {
  frontend: 'Daniel',
  backend: 'José Manuel',
  designer: 'Zara',
  ilustrator: 'Alejandro'
}

const entries = Object.entries(data)  
console.log(entries)                           
// const myProyect = entries.map(puesto => {                        *
//   const data = `el puesto de ${puesto[0]} lo ocupa ${puesto[1]}` * NO SE PORQUE NO CORRE
//   console.log(data)                                              * EN NODE PERO SI EN V8
// })                                                               * DE GOOGLE. CHECARLO
// myProyect()                                                      *
const data2 = {
  frontend: 'Daniel',
  backend: 'José Manuel',
  designer: 'Zara',
  ilustrator: 'Alejandro'
}
const values = Object.values(data2)
console.log(values) //output: ['Daniel', 'José Manuel', 'Zara', 'Alejandro']

const string = 'Hello'
console.log(string.padStart(7, 'hi')) //Output === hiHello
console.log(string.padEnd(12, ' -----'))
 