/* Given the percentage of DNA shared between two people, 
you can calculate their likely familial relationship.

We wrote a function, whatRelation(), that has one number parameter, 
percentSharedDNA, and returns the likely relationship. 
We expect the number passed in to always be an integer from 0 to 100, 
but for some reason it’s not working!

Here’s how it’s supposed to calculate the relationship:

100 should return 'You are likely identical twins.'
35-99 should return 'You are likely parent and child or full siblings.'
14-34 should return 'You are likely grandparent and grandchild,
 aunt/uncle and niece/nephew, or half siblings.'
6-13 should return 'You are likely 1st cousins.'
3-5 should return 'You are likely 2nd cousins.'
1-2 should return 'You are likely 3rd cousins.'
0 should return 'You are likely not related.'
Unfortunately, it’s not working how we want!

whatRelation(34) 
// Should return 'You are likely grandparent and grandchild, 
aunt/uncle and niece/nephew, or half siblings.'
// But instead it's returning 'You are likely 1st cousins.'

whatRelation(3)
// Should return 'You are likely 2nd cousins.'
// But instead it's returning 'You are likely grandparent and grandchild, 
aunt/uncle and niece/nephew, or half siblings.'


Can you fix our code, please?

You may think there’s a problem with using only if‘s and not else if‘s, 
but since we return from each block, that shouldn’t be a problem. 
But check all the conditions we wrote… there’s something not quite right there…*/

const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.';
    }
    if (percentSharedDNA >= 35 && percentSharedDNA <= 99) {
        return 'You are likely parent and child or full siblings.';
    }
    if (percentSharedDNA >= 14 && percentSharedDNA <= 34) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.';
    }
    if (percentSharedDNA >= 6 && percentSharedDNA <= 13) {
        return 'You are likely 1st cousins.';
    }
    if (percentSharedDNA >= 3 && percentSharedDNA <= 5) {
        return 'You are likely 2nd cousins.';
    }
    if (percentSharedDNA >= 1 && percentSharedDNA <= 2) {
        return 'You are likely 3rd cousins.';
    }
    if (percentSharedDNA === 0) {
        return 'You are likely not related.';
    }
}

console.log(whatRelation(34));
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3));
// Should print 'You are likely 2nd cousins.'
console.log(whatRelation(100)); // You are likely identical twins.
console.log(whatRelation(50));  // You are likely parent and child or full siblings.
console.log(whatRelation(20));  // You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.
console.log(whatRelation(10));  // You are likely 1st cousins.
console.log(whatRelation(4));   // You are likely 2nd cousins.
console.log(whatRelation(1));   // You are likely 3rd cousins.
console.log(whatRelation(0));   // You are likely not related.