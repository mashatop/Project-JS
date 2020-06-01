"use strict";

function copy(mainObj){   //Копирование объекта
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        Y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);


const add = {
    d: 17,
    e: 20
};


console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();


newArray[1] = 'fhfhjffj';
console.log(newArray);
console.log(oldArray);


const   video = ['youtube', 'vimeo', 'rutube'],
        blogs = ['worlpress', 'livejiournal', 'blogger'],
        internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const arr1 = [1, 2, 3];
log(...arr1);


const array = ['a', 'b'];
const newAarray = [...array]; // Копия массива

const q = {
    one: 1,
    two: 2
};
const newObj = {...q}; //Копия объекта