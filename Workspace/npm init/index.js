const fs = require('fs');
const { argv } = require('yargs');
const {EventEmitter} = require('events');
console.log(argv);
//npm run start
fs.appendFile('message.txt', 'data to append', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
  
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('an event occured!');
});
myEmitter.once('asdfas', (asd) => {
    console.log('asdfas'+asdfas);
})
myEmitter.emit('error', new Error('whoops!'));
myEmitter.emit('error', new Error('whoops!'));
myEmitter.emit('error', new Error('whoops!'));

