# Making a Get Requests Using Fetch API

## Instructions


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

- [x]  - Task 5:
Inside the success callback function, create a conditional statement that checks if the ok property of the response object evaluates to a truthy value.

If so, return response.json().

By returning response.json(), the next .then() method chained to it will receive a Promise with JSON data.

* Hint: 
Use an if conditional statement to check response.ok. Then inside the if conditional statement, return response.json().

- [x]  - Task 6:
Below the condition’s code block, throw an Error stating 'Request failed!' to raise an exception if the request failed.

* Hint :
This line of code is not part of the conditional statement to check response.ok. It should go under that block of code but still inside the callback function.


- [x]  - Task 7:

Next, we will add a second argument to the .then() method to add another callback function to handle errors. Create an arrow function that takes one parameter, networkError.

In the code block of the arrow function, log networkError.message to the console.

Note that we will continue to add to this code in the next exercise to manipulate the webpage to see the word suggestions from Datamuse. The submit button will not return anything yet.

- Hint:
- 
- The .then() method should now look something like:

```js
.then((response) => {
  // Previous code to check and return response
},(networkError) => {
  // log networkError.message
});
```