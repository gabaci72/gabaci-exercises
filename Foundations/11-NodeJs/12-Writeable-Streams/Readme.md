# Writeable Streams

Writeable streams are used to write data to a destination, such as a file or a network socket. They are an essential part of Node.js's asynchronous I/O model. Here are some key points about writeable streams:
1. **Writing Data**:
   - You can write data to a writeable stream using the `write()` method.
   - The `write()` method returns a boolean indicating whether the data was flushed successfully to the underlying system. If it returns `false`, you should wait for the `'drain'` event before writing more data. 

   ```javascript
   const fs = require('fs');
   const writableStream = fs.createWriteStream('example.txt');
   writableStream.write('Hello, World!\n');
   writableStream.write('This is a writeable stream example.');
   ```
   2. **Ending the Stream**:
     - You can end the stream using the `end()` method. This will emit the `'finish'` event when all data has been flushed to the underlying system.
     ```javascript
     writableStream.end();
     ```
     **Error Handling**:
     - You can handle errors by attaching an `'error'` event listener to the stream.
     ```javascript
     writableStream.on('error', (err) => {
      console.error('Error writing to stream:', err);
     });
     ```
     **Piping and Chaining**:
     - Writeable streams can be piped from readable streams using the `pipe()` method. This is useful for chaining streams together.
     ```javascript
     const readableStream = fs.createReadStream('input.txt');
     readableStream.pipe(writableStream);
     ```
     **Draining**:
     - If the `write()` method returns `false`, you should wait for the `'drain'` event before writing more data. This ensures that the stream is not overwhelmed with data.
     ```javascript
     writableStream.on('drain', () => {
        // Write more data here
        ;
    });
    ```
    **Example**:
    ```javascript
    const fs = require('fs');
    const writableStream = fs.createWriteStream('example.txt');
    writableStream.write('Hello, World!\n');
    writableStream.write('This is a writeable stream example.');
    writableStream.end();
    writableStream.on('finish', () => {
        console.log('All writes are now complete.');
    });
    ```
    This example demonstrates how to create a writeable stream, write data to it, and handle errors and events. Writeable streams are essential for handling data output in Node.js applications.
    If you have any specific questions or need further details, feel free to ask!