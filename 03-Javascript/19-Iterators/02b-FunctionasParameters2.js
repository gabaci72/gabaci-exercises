const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`;
}

const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}

// higherOrderFunc fonksiyonunu çağır ve dönen değeri console.log ile yazdır
console.log(higherOrderFunc(anotherFunc)); // Çıktı: "I just invoked anotherFunc as a callback function!"