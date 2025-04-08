# Making a POST Requests Using Fetch API

## Instructions

- [x]  - Task 1:Set the value of the apiKey variable to your Rebrandly API key as a string.

If a correct key is not assigned, proper results will not be seen in the steps afterwards.

- Hint:You can find the apiKey variable declaration at the top of main.js. Replace '<Your API Key>' with your own Rebrandly API key.
-

- [x]  - Task 2: We will make our POST request inside the shortenUrl() function. Inside the code block of shortenUrl(), create a const variable named urlToShorten and assign it inputField.value. urlToShorten will keep the value of what is being typed into the input field.

Note that we will be working inside shortenUrl() for the remainder of this exercise.

- Hint:Make sure you’re working inside the shortenUrl() function.

- [x]  - Task 3: Underneath the urlToShorten declaration, create another const variable named data and assign it to the stringified version of {destination: urlToShorten}. We can use the JSON.stringify() method to do this.

The data variable will be used to send the information, which needs to be in string format, to the request body.

- Hint:We can use the JSON.stringify() method to convert a JSON object to a string like below:

```javascript
JSON.stringify({destination: urlToShorten});
```

- [x]  - Task 4: Below our data variable declaration, call the fetch() function. Pass url as its first argument and an empty object as its second argument.

- Hint: The fetch() function would look something like:

```
fetch(url, {})
```

- [x]  - Task 5: Now it’s time to add some properties to the empty object that you just created. Add a property with the key method and the value 'POST'.

- Hint: Make sure you’re adding the property in the empty object you created in the previous step.

An object with a single property (key-value pair) should look like this:

```js
{ exampleKey: 'example value' }

```

- [x]  - Task 6: .
In the same object, add another property. The key for this property is headers and the value will be the following object:

```js
{
  'Content-type': 'application/json',
  'apikey': apiKey
}

```

We will use this to connect to the API.

- Hint: Remember to separate the properties using a comma.

Take a look at the following example:

```js
let someObject = {
  key1: value1,
  key2: {
    insideKey2: valueInsideKey2,
    alsoInsideKey2: value2InsideKey2
  }
}

```

- [x]  - Task 7: .
In that same object that has the properties method and headers, add another property. The key is named body and the value will be data.

We’ve now created an object containing all the information we need for our POST request!


- Hint: Make sure you’re adding our last property to the object that has method and headers, not not in the headers object.

Also, check to see that you’ve separated the properties with commas.
