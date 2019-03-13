console.log('app started');
console.time('timer1'); //start timer

setTimeout(
    function(){console.timeEnd('timer1');},
    0
);

for (var i=0; i<10; i++){
    console.log(i);
}

console.log('app finished');

