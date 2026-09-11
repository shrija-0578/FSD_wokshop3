const EventEmitter=require('events');
const myEmitter=new EventEmitter();

myEmitter.on('greet',(name)=>{
   console.log(`welcome, ${name}!`);
});

myEmitter.on('exit',(code)=>{
   console.log(`exiting with code: ${code}`);
});

myEmitter.emit('greet','CSE 31');
myEmitter.emit('exit',0);
