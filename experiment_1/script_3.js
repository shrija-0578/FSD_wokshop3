// cronjof
// process.nextTick() is used to schedule a callback function to be invoked in the next iteration of the event loop, after the current operation completes. It allows you to defer the execution of a function until the next tick of the event loop, 
// ensuring that it runs after any currently executing code has finished.

// setTimeout() is used to schedule a callback function to be executed after a 
// specified delay in milliseconds. It allows you to delay the execution of a function for
//  a certain amount of time, and it can be used to create timers or schedule tasks to run 
// at specific intervals.

// setImmediate() is used to schedule a callback function to be executed immediately 
// after the current event loop iteration completes. It allows you to execute a 
// function as soon as possible, without waiting for any other operations to finish.
//  It is similar to setTimeout() with a delay of 0, but it guarantees that the 
// callback will be executed after the current event loop iteration.

console.log('1.start');

process.nextTick(()=>{
    console.log('2.nextTick ');
});

setTimeout(()=>{
    console.log('3.setTimeout ');
},0);

setImmediate(()=>{
    console.log('4.setImmediate ');
});

console.log('5.end');