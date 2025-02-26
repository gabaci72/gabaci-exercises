# The Timers Module

There are times when we want some of our code to be executed at a specified point in time. This is what the timers module is used for. Like the Buffer module, it is not necessary to use the require() import statement as the 
Preview: Docs Methods are object properties that contain functions.
methods
 of the timer module are global. This means that we can use them without importing the module. The timer module has four methods: setTimeout(), setInterval(), setImmediate(), and clearTimeout().

setTimeout() and setInterval() are used to execute code after a specified delay. The setImmediate() method is used to execute code at the end of the current event loop cycle. The clearTimeout() method is used to cancel a timer that was previously created with setTimeout().
The setTimeout() method is used to execute code after a specified delay. The delay is specified in milliseconds. The code to be executed is specified as a function. The setTimeout() method returns a timer object that can be used to cancel the timer with the clearTimeout() method.
The setInterval() method is used to execute code repeatedly at a specified interval. The interval is specified in milliseconds. The code to be executed is specified as a function. The setInterval() method returns a timer object that can be used to cancel the timer with the clearTimeout() method.
The setImmediate() method is used to execute code at the end of the current event loop cycle. The code to be executed is specified as a function. The setImmediate() method returns a timer object that can be used to cancel the timer with the clearTimeout() method.
Here is an example of how to use these methods:
```javascript

// setTimeout example
setTimeout(() => {
  console.log('This will be printed after 2 seconds');
}, 2000);
// setInterval example
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`This will be printed every second. Count: ${count}`);
  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000);
// setImmediate example
setImmediate(() => {
  console.log('This will be printed at the end of the current event loop cycle');
});
// clearTimeout example
const timeoutId = setTimeout(() => {
  console.log('This will not be printed');
}, 2000);
clearTimeout(timeoutId);
```
