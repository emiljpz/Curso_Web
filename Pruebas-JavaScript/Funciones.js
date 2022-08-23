const sum = (p1, p2) => { //si hay solo un parámetro , se excluyen los paréntesis.
    console.log(p1)
    console.log(p2)
    return p1 + p2
}
const result = sum(1, 33)
console.log(result)

//forma mas acortada de hacer las cosas:

const sum2 = (p1, p2) => p1 + p2
console.log(sum2(3, 3))

const t = [1, 2, 3, 4, 5]
const sumas = t.map(p => p + p)
console.log(sumas)

function product(a, b) {
    return a * b
}
const result2 = product(2, 3)
console.log(result2)

const average = function (a, b) {
    return (a + b) / 2
}

const result3 = average(2, 5)