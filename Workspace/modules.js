// modules
const add = (a, b) => {
    console.log('sum', a + b);
}

const sub = (a,b) => {
    console.log('sub', a - b);
}

const mul = (a,b) => {
    console.log('mul', a * b);
}

const div = (a,b) => {
    console.log('div', a / b);
}

//you have to export the file in order to use these function in other files
//even you do require, you will be able to use this file only when you export it
//export will make these objects public
module.exports = {
    add, sub, mul, div
}