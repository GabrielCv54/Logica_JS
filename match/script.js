var word = "Leia_olo*985"

var arr1 = word.match(/[a-z]/g)
var arrUpper = word.match(/[A-Z]/g)
var arrNumbers = word.match(/[0-9]/g)
var arrSymbols = word.match(/\W|_/g)
var arrAleatory = word.match(/[O-Z]/g)

console.log(arr1)
console.log(arrUpper)
console.log(arrNumbers)
console.log(arrSymbols)
console.log(arrAleatory)