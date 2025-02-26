# Message Mixer Project

Message Mixer Inc. offers a message-encryption service that transforms input text, using various ciphers, and displays the encrypted message to the console.

There are three encryption methods provided by this service:

* A “Caesar Cipher” in which the characters of the input message are shifted alphabetically by a given amount.
* A “Symbol Cipher” in which select characters from the input message are replaced with visually similar symbols.
* A “Reverse Cipher” in which each word of the input message is reversed in place.
  To use this service, run the command below:*

node message-mixer.js ['caesar'|'symbol'|'reverse'] [amount]

Here are some examples of running this program:

* Caesar Cipher with a shift of 4:

```bash
$ node message-mixer.js caesar 4
Enter the message you would like to encrypt...

> hello world

Here is your encrypted message:

> lipps asvph

$ node message-mixer.js 'reverse'
Enter the message you would like to encrypt...

> hello world

Here is your encrypted message:

> olleh dlrow
```

At present, Message Mixer Inc. sells their encryption service as a program in a single file called message-mixer.js. This single file includes:

1. The functions that perform the encryptions listed above.
2. The code for retrieving the user input.
3. The code for displaying the output back to the user.

Message Mixer Inc. now wants to join the open-source community by packaging its encryption functions in a module and allowing other developers to import these encryption functions into their own projects.

In this project, you will help Message Mixer Inc. extract and isolate its encryption functions into a module, called encryptors.js, and then refactor message-mixer.js to use this module’s functions.

Before you begin, try running the commands listed above in the terminal. Then, familiarize yourself with how the program works by examining the three files in the file directory, focusing on message-mixer.js. At the top of this file you will find the three encryption cipher functions. Towards the bottom of the file, you will find some code that uses the process.argv, process.stdin, process.stdout environment variables to determine which encryption method to use, parse the user input, and display the encrypted message.

## Tasks

Mark the tasks as complete by checking them off
Extract the encryption functions.

* [X] 1.

caesarCipher()
symbolCipher()
reverseCipher()
First, copy all three of these function definitions into encryptors.js. Then, save encryptors.js.

encryptors.js should look like this:

```js
const caesarCipher = (str, amount) => {
  // The body of caesarCipher...
}

const symbolCipher = (str) => {
  // The body of symbolCipher...
}

const reverseCipher = (sentence) => {
  // The body of reverseCipher...
}
```

* [X] 2.

Inside encryptors.js, assign each encryption function as a property of the module.exports object.

To export a value from a Node module, you can assign a value to the module.exports object like so:

```js
// Export a named function.
module.exports.functionToExport = functionToExport;

// or... export a function expression.
module.exports.functionToExport = () => {};


Or you can assign module.exports to an object of the exported values:

module.exports = {
  functionToExportA,
  functionToExportB
};
```

Refactor your code to use the exported functions.

* [X] 3.

First, delete these three function definitions from message-mixer.js.

As a result, you should only have the user input and output logic remaining. Additionally, running the program will now produce reference errors.

message-mixer.js should now only include getEncryptionMethod() and displayEncryptedMessage() and the code for running the program.

If you were to run the command node message-mixer.js 'symbol' in the terminal, you would see the following error:

ReferenceError: symbolCipher is not defined

* [X] 4.

There are multiple ways of doing this, however, the suggested approach will avoid needing to make modifications to the input / output logic.

At the top of message-mixer.js:

Declare a new variable called encryptors.
Then, import the module.exports object from encryptors.js and assign the imported object to encryptors.
Use the require() function to import a module. Your code should look something like this:

```js
const myModule = require('path/to/myModule.js');
```

You can use a relative file path to import a module that is stored in the same folder as the current file.

encryptors.js is stored in the same folder as message-mixer.js so the relative file path will be './encryptors.js'.

* [X] 5.

Extract the three encryption methods from encryptors and store them in three variables: caesarCipher, symbolCipher, and reverseCipher.

There are a few ways to extract values out of an object. The quickest is with object destructuring syntax:

```js
const { valueA, valueB, valueC } = object;
```

Alternatively, you can extract each value one at a time:

```js
const valueA = object.valueA;
const valueB = object.valueB;
```

* [X] 6.

node message-mixer.js caesar 4

And then, when prompted, type the following message:

> cnawp fkx!

By moving the encryption functions into a separate module and exporting them, you’ve separated the concerns of the program, making it more organized and easier to navigate. Furthermore, you can now use these encryption methods to build another program!

Create a new program using the module.

* [X] 7.

The Super Encoder developers want the user to be able to use their program to encode messages and decode them using the commands below:

> node super-encoder.js encode

and

> node super-encoder.js decode

Try running each of these commands. They currently print undefined.

Below is an example of what you might see when you run this program.

> node super-encoder.js encode

Enter the message you would like to encrypt...

> hello world
>
> undefined

* [X] 8.

At the top of the file, you should see the functions encodeMessage() and decodeMessage() are incomplete. It will be your job to use the encryption functions to complete these two functions.

First, at the top of super-encoder.js, import the encryption functions caesarCipher(), symbolCipher(), and reverseCipher() from the encryptors.js file.

You can use object destructuring and the require() function to import multiple values from a module:

const { valueA, valueB, valueC } = require('/path/to/myModule');

encryptors.js is in the same folder as super-encoder.js so the relative file path will be './encryptors.js'.

* [X] 9.

Some guidelines:

You must use each encryption function at least once.
It is your choice what order you use to call the encryption functions.
You may also re-use encryption functions to encode the message.
caesarCipher() requires an amount argument. Choose some number between 0 and 26 to use for this argument and remember your choice for decodeMessage().
When you are finished, try running the program like so:

> $ node super-encoder.js encode

Here is an example of how you may create encodeMessage() with an amount of 6 used for the Caesar cipher:

```js
const encodeMessage = (str) => {
  return reverseCipher(symbolCipher(caesarCipher(str, 6)));
}
```

* [X] 10.

For example, using message-mixer.js, we can encode the message 'hello world' using a Caesar cipher with an amount of 4 like so:

```bash
$ node message-mixer.js caesar 4
Enter the message you would like to encrypt...
> hello world

Here is your encrypted message:
> lipps asvph
```

To decode the message 'lipps asvph', we can run the program in reverse, like so:

```bash
$ node message-mixer.js caesar -4
Enter the message you would like to encrypt...
> lipps asvph

Here is your encrypted message:
> hello world
```

Now, in super-encoder.js, define decodeMessage() to provide a function that reverses the encoding of encodeMessage().

Here is an example of how you may create decodeMessage() to match encodeMessage().

```js
const encodeMessage = (str) => {
  return reverseCipher(symbolCipher(caesarCipher(str, 6)));
}

const decodeMessage = (str) => {
  return caesarCipher(symbolCipher(reverseCipher(str)), -6);
}
```

* [X] 11.

In the terminal, run the super-encoder.js program to test your code.

Take a look at the encodeMessage() and decodeMessage() function definitions in the hints. You can then run the program like so:

```bash
$ node super-encoder.js encode
Enter the message you would like to encrypt...
> hello world
urrkn jrxuc
$ node super-encoder.js decode
Enter the message you would like to encrypt...
> urrkn jrxuc
hello world
```
