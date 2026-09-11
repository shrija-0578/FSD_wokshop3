const EventEmitter=require('events');
const myEmitter=new EventEmitter();

myEmitter.on('greet',(name)=>{          //listener for greet event
   console.log(`welcome, ${name}!`);
});

myEmitter.on('exit',(code)=>{       //listener for exit event
   console.log(`exiting with code: ${code}`);
});

myEmitter.emit('greet','CSE 31');       //emitting greet event
myEmitter.emit('exit',0);               //emitting exit event
