//  将数组中 小于100 的选出来
//  再乘以2 
//  最后再求和 
const nums = [10, 20, 333, 190, 100, 13, 12, 34]



let result3 = nums.filter(function(n) {
    return n < 100
}).map(function(n) {
    return n * 2
}).reduce(function(preValue, n) {
    return preValue + n
}, 0)
console.log(result3)

// let result1 = nums.filter(function(n) {
//     return n < 100
// })
// console.log(result1)

// let result2 = result1.map(function(n) {
//     return n * 2
// })
// console.log(result2)


// let result3 = result2.reduce(function(PreValue, n) {
//     return PreValue + n
// }, 0)
// console.log(result3)


// let result1 = []

// for (item of nums) {
//     if (item < 100) {
//         result1.push(item)
//     }
// }
// console.log(result1)

// let result2 = []
// for (item of result1) {
//     result2.push(item * 2)
// }


// let result3 = 0
// for (item of result2) {
//     result3 += item
// }

// console.log(result3)