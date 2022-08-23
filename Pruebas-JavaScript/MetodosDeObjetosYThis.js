
const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function () {
        console.log('My name is ' + this.name)
    },

    //898 crear referencia.
    doAddition: function (a, b) {
        console.log(a + b)
    }

}
arto.greet()

//se pueden declarar nuevos metodos.

arto.makeOlder = function () {
    this.age += 1
}

arto.makeOlder()
console.log(arto.age)

//898 crear referencia.
const referenceAdd = arto.doAddition
referenceAdd(10, 213)

//si el metodo tiene un this. ,  se pierde esa referencia al meterla en una referencia2, lo que lleva a un error de no encontrado.
const referenciaGreet = arto.greet
referenciaGreet()

//referenciar como en java
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log('Hello my name is ' + this.name)
    }
}

const adam = new Person('Juan, 45')
adam.greet()
