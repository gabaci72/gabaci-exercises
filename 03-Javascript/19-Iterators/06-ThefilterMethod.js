const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

console.log(words);
const shortWords = words.filter(word => {
  return word.length < 6;
});
console.log(shortWords);