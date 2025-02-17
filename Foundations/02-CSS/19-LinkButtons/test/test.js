console.log = function() {};

const fs = require('fs');
const code = fs.readFileSync('style.css', 'utf8');
const assert = require('chai').assert;


  // step 1: CSS regex 
let CSS_RegEx = /a\s*{[^}]*color\s*:\s*blue\s*\s*[^}]*}/ // put your css selectors here
let found = CSS_RegEx.test(code);


describe('', function () {
  it('', function () {
    assert.strictEqual(found, true, 'Did you set the `color` property to `blue` for `<a>` tags?')
  });
});