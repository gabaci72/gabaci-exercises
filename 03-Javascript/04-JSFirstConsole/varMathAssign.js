// Mathematical Assignment Operators //
var a = 10;
var b = 5;

a += b;
console.log(a);
a -= b;
console.log(a);
a *= b;
console.log(a);
a /= b;
console.log(a);
a %= b;
console.log(a);

// Increment and Decrement Operators //
var c = 10;
c++;
console.log(c);
c--;
console.log(c);
// Unary Operators //
var d = 10;
var e = -d;
console.log(e);
e -= d;
console.log(e);
e += d;
console.log(e);
e *= d;
console.log(e);
e /= d;
console.log(e);
e %= d;
console.log(e);

// Ternary Operators //
var f = 10;
var g = 5;
var h = f > g ? 'f is greater than g' : 'g is greater than f';
console.log(h);

// Logical Operators //
var i = 10;
var j = 5;
var k = 3;
var l = i > j && i > k;
console.log(l);
var m = i < j || i < k;
console.log(m);
var n = !l;
console.log(n);

// Bitwise Operators //
var o = 10;
var p = 5;
var q = o & p;
console.log(q);
var r = o | p;
console.log(r);
var s = o ^ p;
console.log(s);
var t = ~o;
console.log(t);
var u = o << 2;
console.log(u);
var v = o >> 2;
console.log(v);
var w = o >>> 2;
console.log(w);

// Conditional (Ternary) Operator with Math Functions //
var x = 10;
var y = 5;
var z = x > y ? 'x is greater than y' : 'y is greater than x';
console.log(z);
var a = x > y ? x + y : x - y;
console.log(a);
var b = x > y ? x - y : x + y;
console.log(b);
var c = x > y ? x * y : x / y;
console.log(c);