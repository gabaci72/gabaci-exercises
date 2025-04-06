# Handling a Get Requests Using Fetch API

* In this exercise, we will chain another .then() method, which will allow us to take the information that was returned with the promise and manipulate the webpage!
  
## Instructions

- [x]  - Task 1 :At the end of the .then() method, chain another .then() method.

As the first argument of our second .then() method, pass an anonymous arrow callback function that takes jsonResponse as its single parameter.


- Hint :Make sure to chain our new .then() method to the .then() method from the previous exercise. There should now be two .then() methods used for our fetch() call.


- [x]  - Task 2 :Inside the callback function we just created, call the renderRawResponse() function and pass in jsonResponse as its argument. Run the code.

In the input field, type in a word and click the submit button.

If all went well, we should see an array of words that the Datamuse API responded with!

Note that you can find the renderRawResponse() function declaration in public/helperFunctions.js.

- Hint :Make sure that the renderRawResponse() function is called inside the second .then()‘s callback function.

- [x]  - Task 3 :.
Let’s format our response from the Datamuse API to look presentable on the webpage. To do this, we will use the renderResponse() function that’s been defined in public/helperFunctions.js.

Comment out renderRawResponse(jsonResponse). Then below, call renderResponse(jsonResponse).

Run your code.

Try the webpage again with another word!

- Hint :Remember to call renderResponse(jsonResponse) and comment out renderRawReponse(jsonResponse). This code should be inside the callback function of the second .then() method.
