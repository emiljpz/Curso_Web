const object1 = {
    name: 'Juan',
    age: 33,
    education: 'PhD',
}

console.log(object1.name)
const fieldName = 'age'
console.log(object1[fieldName]) //se usa para referenciar [].

object1.address = 'Helsinki'
object1['secret number'] = 12345 // si declaramos de esta forma debemos referniar luego como[], es como guardar una constante en ese objeto.
console.log(object1.address)
console.log(object1['secret number']) //linea 12, referenciar.

//desestructuracion.
function dimeInfoPersona({ age, name, education }) {
    console.log(age + name + education)
}
dimeInfoPersona(object1)