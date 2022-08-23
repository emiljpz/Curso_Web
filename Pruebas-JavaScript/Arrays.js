const t = [1, 2, 3]

t.push(5) //añade 5.

console.log(t.length)
console.log(t[1]) //imprimir el objeto de la posición 1

t.forEach(value => { console.log(value) }) // forEach aplica a cada elemento del array, de esta forma, se aplica la función de value.

const t2 = t.concat(5) //crea otro array donde se agrega el valor 5, preservando el array inicial.
console.log(t2)

const m1 = t.map(value => value * 2)
console.log(m1)

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)

const [first, second, ...rest] = t
console.log(first, second)
console.log(rest)