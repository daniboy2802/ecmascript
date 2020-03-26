// descomposicion de objetos de una manera diferente
//propagación de objetos un poco más avanzada
const data = {
  frontend: 'Daniel',
  backend: 'José Manuel',
  designer: 'Zara',
  ilustrator: 'Alejandro'
}
const { frontend, ...all } = data
console.log(frontend)
console.log(all)
console.log(data)

const myData = {
  name: 'Daniel',
  age: 18
}
const myData2 = {
  ...myData,
  country: 'MX'
}
console.log(myData)
console.log(myData2)
// end
// metodo que nos permite hacer algo cuando una promesa haya llegado a su fin
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? resolve('Hello world')
      : reject(new Error('test error'))
  })
}
