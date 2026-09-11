const EventEmitter=require('events');
const myEmitter=new EventEmitter();

myEmitter.on('login',(name)=>{         
   console.log(`${name}, logged in`);
});
myEmitter.on(`message`,(msg)=>{
   console.log(`message: ${msg}`);
}
);
myEmitter.emit('login','Aman');       
myEmitter.emit('message','Welcome to node js');
              
