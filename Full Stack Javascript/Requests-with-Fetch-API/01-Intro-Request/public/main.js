// Element selectors
const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');

// Text to populate button text on click
const collection = ["Another", "More", "Next", "Continue", "Keep going", "Click me", "A new one"];

// Asynchronous function
const generateJson = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(response.ok){
      const jsonResponse = await response.json();
      console.log('Received %d user records', jsonResponse.length); // Log to see total users
      // Log to see the first user object
      console.log('First user object:', jsonResponse[0]);
      // Log to see the last user object
      console.log('Last user object:', jsonResponse[jsonResponse.length - 1]);
      renderResponse(jsonResponse);
      // Change button text and listen for next click
      buttonContainer.classList.remove('hidden'); // Show button
      changeButton();
      return jsonResponse; // Return the data to be used in the next function
    }
  } catch(error) {
    console.log(error);
  }
};
    
// Format returned promise data
const formatJson = (resJson) => { // Format the JSON
  resJson = JSON.stringify(resJson);
  let counter = 0;
  return resJson.split('')
  .map(char => {
    switch (char) {
      case ',':
        return `,\n${' '.repeat(counter * 2)}`;
      case '{':
        counter += 1;
        return `{\n${' '.repeat(counter * 2)}`;
      case '}':
        counter -= 1;
        return `\n${' '.repeat(counter * 2)}}`;
      default:
        return char;
    }
  })
  .join('');
};

// Display formatted data
const renderResponse = (jsonResponse) => {
  const jsonSelection = Math.floor(Math.random() * 10);
  display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
};

// Change button text
const changeButton = () => {
  const newText = Math.floor(Math.random() * 7);
  jsonButton.innerHTML = `${collection[newText]}!`;
};

// Listen for click on button
jsonButton.addEventListener('click', generateJson);

// Show console.log() output in the console all const variables and functions in this file
console.log('jsonButton:', jsonButton);
console.log('buttonContainer:', buttonContainer);
console.log('display:', display);
console.log('collection:', collection);
console.log('generateJson:', generateJson);
console.log('formatJson:', formatJson);
console.log('renderResponse:', renderResponse);
console.log('changeButton:', changeButton);
console.log('jsonSelection:', jsonSelection);
console.log('newText:', newText);
console.log('counter:', counter);
console.log('jsonResponse:', jsonResponse);
console.log('resJson:', resJson);
console.log('char:', char);
console.log('jsonButton.innerHTML:', jsonButton.innerHTML);
console.log('jsonButton.addEventListener:', jsonButton.addEventListener);