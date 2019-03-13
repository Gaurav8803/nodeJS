console.log('app started');

// for (var i=0; i<10; i++){
//     (function (j) {
//         setTimeout(
//         function () { console.log(j) },
//         i * 100);
//     })(i);
// }

// let -> block scope variable
// const -> read only variables
const a=10;
//a=12;
for (let i=0; i<10; i++){
    setTimeout(
        function () { console.log(i) },
        i * 100)
    };

console.log('app finished');

