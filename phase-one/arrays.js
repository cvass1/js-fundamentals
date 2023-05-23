const names = ['phil', 'caroline', 'pip', 'vass']
console.log(names[1])
newNames = names.concat('pippin')
console.log(newNames)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = 0
numbers.forEach((number) => {
    sum += number
})

console.log(sum)

const addToBatch = (array,number) => {
    if (array.length <5 ){
    array = array.concat(number)
    }
    return array
}
let array = [1,2,3,4,5]
console.log(addToBatch(array, 6))
array = [1,2,3]
console.log(addToBatch(array, 4))
array = [1,2,3,4,5,6,7,8,9]
console.log(addToBatch(array, 10))






