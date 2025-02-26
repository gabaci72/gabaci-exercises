//As an optional challenge, in app.js, use the buffer and timer modules to create two buffers, join them together, convert them to a string, and log the result to the console after 3 seconds.

// Remember that you can run app.js with the node command in the terminal.

setTimeout(() => {
    const buffer1 = Buffer.from('Hello');
    const buffer2 = Buffer.from('learner');
    const bufferArray = [buffer1, buffer2];
    const bufferConcat = Buffer.concat(bufferArray);
  
    console.log(bufferConcat.toString());
  }, 3000);
  