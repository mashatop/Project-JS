"use strict";

const arr = [2, 22, 13, 36, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr;)

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();

// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// for (let value of arr) {
//     console.log(value);
// }

const str = prompt('', '');
const products = str.split(', '); //  Преобразование строки в массив
products.sort();
console.log(products.join('; ')); // Объдинение массива в строку