let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

console.log('Original Story:');
console.log(story);

// Hikayeyi kelimelere ayır ve bir diziye dönüştür
let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

console.log('Split the story into words and turn it into an array:');
console.log(storyWords);
console.log('Array of Words Converted Back to String:');
console.log(storyWords.join(' '));

// Kelime sayısını hesapla
let count = 0;
storyWords.forEach((word) => {
  count++;
});
console.log('Count of Words: ' + count); // Kelime sayısını gösterir

// Gereksiz kelimeyi filtrele
storyWords = storyWords.filter((word) => {
  return word !== unnecessaryWord;
});
console.log('Array of Words After Removing Unnecessary Word:');
console.log(storyWords.join(' ')); // Güncellenmiş hali gösterir

// Yanlış yazılan kelimeyi düzelt
storyWords = storyWords.map((word) => {
  return word === misspelledWord ? "beautiful" : word;
});
console.log('Shows the corrected version:');
console.log(storyWords.join(' ')); // Düzeltilmiş hali gösterir

// Uygunsuz kelimenin indeksini bul
const badWordIndex = storyWords.findIndex((word) => {
  return word === badWord;
});
console.log('Show the BadWords Index:');
console.log(badWordIndex); // Uygunsuz kelimenin indeksini gösterir

// Uygunsuz kelimeyi değiştir
storyWords[badWordIndex] = 'really';
console.log('Shows modified version:');
console.log(storyWords.join(' ')); // Değiştirilmiş hali gösterir

// Kelime uzunluğu kontrolü
const lengthCheck = storyWords.every((word) => {
  return word.length <= 10;
});
console.log('Are there any words shorter than 10 characters? : ' + lengthCheck); // Tüm kelimelerin 10 karakterden kısa olup olmadığını gösterir

// 10 karakterden uzun kelimeyi bul ve değiştir
const longWord = storyWords.find((word) => word.length > 10);
story = story.replace(longWord, 'stunning');
console.log('Last version :' + story); // Değiştirilmiş hali gösterir