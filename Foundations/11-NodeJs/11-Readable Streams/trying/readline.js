const readline = require('readline'); // readline modülünü içe aktarıyoruz
// console.log(readline);
const rl = readline.createInterface({ // readline arayüzünü oluşturuyoruz. Bu arayüz, kullanıcıdan girdi almak ve çıktı vermek için kullanılır. Bu arayüz, process.stdin ve process.stdout akışlarını kullanır.
  
  input: process.stdin, // process.stdin, kullanıcıdan girdi almak için kullanılır. Bu akış, kullanıcının klavyeden girdiği verileri temsil eder.
 
  output: process.stdout // process.stdout, kullanıcıya çıktı vermek için kullanılır. Bu akış, kullanıcının ekranına yazdırılan verileri temsil eder.
  
});
//  console.log(process.stdin);
//  console.log(process.stdout);
//  console.log(rl);
//  console.log(rl.question);
//  console.log(rl.close);
 
rl.question('Adınız nedir? ', (name) => { // Kullanıcıdan bir soru soruyoruz. Kullanıcı cevap verdiğinde, cevap (name) değişkenine atanır.
  // console.log(name);
  console.log(`Merhaba, ${name}!`); // Kullanıcının adını ekrana yazdırıyoruz.
  rl.close(); // readline arayüzünü kapatıyoruz. Bu, programın sonlanmasını sağlar.
  // console.log(rl.close);
});


