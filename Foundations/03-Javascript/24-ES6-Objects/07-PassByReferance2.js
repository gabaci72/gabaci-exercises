/*
We declared this spaceship object with let. This allowed us to reassign it to a new object with identified and 'transport type' properties with no problems. 

Bu uzay gemisi nesnesini let ile bildirdik. Bu, onu herhangi bir sorun olmadan, tanımlanmış ve 'taşıma türü' özelliklerine sahip yeni bir nesneye yeniden atamamıza olanak sağladı.

When we tried the same thing using a function designed to reassign the object passed into it, the reassignment didn’t stick (even though calling console.log() on the object produced the expected result). 

Aynı şeyi, içine geçirilen nesneyi yeniden atamak üzere tasarlanmış bir işlevi kullanarak denediğimizde, yeniden atama tutmadı (nesne üzerinde console.log() çağırmak beklenen sonucu üretmesine rağmen).

When we passed spaceship into that function, obj became a reference to the memory location of the spaceship object, but not to the spaceship variable. This is because the obj parameter of the tryReassignment() function is a variable in its own right. The body of tryReassignment() has no knowledge of the spaceship variable at all! 

Bu işleve uzay gemisini geçirdiğimizde, obj uzay gemisi nesnesinin bellek konumuna bir referans oldu, ancak uzay gemisi değişkenine değil. Bunun nedeni, tryReassignment() işlevinin obj parametresinin kendi başına bir değişken olmasıdır. tryReassignment()'ın gövdesi, uzay gemisi değişkeni hakkında hiçbir bilgiye sahip değildir!

When we did the reassignment in the body of tryReassignment(), the obj variable came to refer to the memory location of the object {'identified' : false, 'transport type' : 'flying'}, while the spaceship variable was completely unchanged from its earlier value.

tryReassignment()'ın gövdesinde yeniden atamayı yaptığımızda, obj değişkeni nesnenin bellek konumuna {'identified' : false, 'taşıma türü' : 'flying'} atıfta bulunurken, uzay gemisi değişkeni önceki değerinden tamamen değişmedi.*/

let spaceship = {
    homePlanet : 'Earth',
    color : 'red'
  };
  let tryReassignment = obj => {
    obj = {
      identified : false, 
      'transport type' : 'flying'
    }
    console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
   
  };
  tryReassignment(spaceship) // The attempt at reassignment does not work.
  spaceship // Still returns {homePlanet : 'Earth', color : 'red'};

  console.log(spaceship) // Prints {homePlanet : 'Earth', color : 'red'}
   
  spaceship = {
    identified : false, 
    'transport type': 'flying'
  }; // Regular reassignment still works.
  