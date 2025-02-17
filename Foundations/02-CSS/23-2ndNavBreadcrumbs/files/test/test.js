console.log = function() {};

const fs = require('fs');
const code = fs.readFileSync('styles.css', 'utf8');
const assert = require('chai').assert;


  // step 1: CSS regex 
let CSS_RegEx = /breadcrumb\s*a:hover\s*{[^}]*color\s*:\s*red\s*\s*[^}]*}/ // put your css selectors here
let found = CSS_RegEx.test(code);


describe('', function () {
  it('', function () {
    assert.strictEqual(found, true, '.breadcrumb a selector should have a text-decoration property with a value: none')
  })
})