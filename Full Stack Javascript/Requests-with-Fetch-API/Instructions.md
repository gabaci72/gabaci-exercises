# Instructions

- [x]  - Task 1: At the top of main.js, create a const variable called url. Assign url to the following URL as a string:

```bash
https://api.datamuse.com/words?sl=
```

The ?sl= portion of the string will be the start of your query string, which will be used to pass parameters to the Datamuse API. The query string will be used by the engine to narrow the search to words that sound like your word.

* Hint:
Wrap the URL in quotes—this will be the URL of the API that we will be accessing.

- [x]  - Task 2: Inside the getSuggestions() function, create a const variable called wordQuery and assign it inputField.value.

We’ll need wordQuery to store the value of what is being typed into the input field.

Create another const variable called endpoint and assign it the value of a string that is url, and wordQuery concatenated in that order.

We will be working inside getSuggestions() function for the remainder of this exercise.

Hint:
Remember to write inside the code block for the getSuggestions() function.

We have a couple of ways to concatenate a string:

```js
const word1 = 'hello';
const word2 = 'world!';

console.log(word1 + ' ' + word2); // output: 'hello world!'
```

or
We can also interpolate it using a template literal, but remember to use backticks!

```js
console.log(`${word1} ${word2}`); // output: 'hello world!'
```

- [x]  - Task 3:Inside the getSuggestions() function, call the fetch() function and pass in endpoint as an argument. For this API to work within the Codecademy browser, add {cache: 'no-cache'} as the second argument.

* Hint:

- Make sure to write inside the code block of getSuggestions().
- [x]  - Task 4:
Chain a .then() method to the fetch() function. Pass an arrow callback function as its argument. The callback function should take response as its single parameter.

* Hint:

We will use an anonymous arrow function as the callback. The syntax will look like:

```js
fetch(endpoint, {cache: 'no-cache'}).then(response => {});
```
