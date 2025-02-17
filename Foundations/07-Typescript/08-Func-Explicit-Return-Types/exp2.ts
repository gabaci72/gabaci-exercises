// const createArrowGreeting = (name?: string): string => {
//   if (name) {
//     return `Hello, ${name}!`;
//   }

//   return undefined;
//   // Typescript Error: Type 'undefined' is not assignable to type 'string'.
// };

const createArrowGreeting = (name?: string): string => {
  if (name) {
    return `Hello, ${name}!`;
  }

  return "Hello, Guest!"; // Varsayılan string
}; /* Bu kod parçası, TypeScript ile bir fonksiyon tanımlamakta ve bu fonksiyonun dönüş tipini belirtmektedir. Fonksiyon `name` adlı bir parametreyi alabilir ve isteğe bağlı olarak bir string değer içerebilir. Eğer `name` parametresi sağlanmazsa, fonksiyon "Hello, Guest!" dizesini döndürür.
İşte kodun ayrıntılı analizi: 
1. `createArrowGreeting` fonksiyonu tanımlanır ve parametre olarak `name` adında bir isteğe bağlı parametre alır.
2. Fonksiyonun içinde, eğer `name` parametresi sağlanırsa, fonksiyon `Hello, ${name}!` dizesini döndürür. 
3. Eğer `name` parametresi sağlanmazsa, fonksiyon `Hello, Guest!` dizesini döndürür.
Bu kod parçası, TypeScript'te isteğe bağlı parametreleri ve varsayılan değerleri kullanma konusunda bir örnek sunar. */
