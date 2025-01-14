"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = '123 Main St, Anytown, USA';
var productName = 'fanny pack';
var product;
for (var _i = 0, products_2 = products_1.default; _i < products_2.length; _i++) {
    var p = products_2[_i];
    if (p.name === productName) {
        product = p;
        break;
    }
}
if (product) {
    if (product.preOrder === 'true') {
        console.log('We will send you a message when your product is on its way.');
    }
    if (Number(product.price) >= 25) {
        shipping = 0;
        console.log('We provide free shipping for this product.');
    }
    else {
        shipping = 5;
    }
    if (shippingAddress.match('New York')) {
        taxPercent = 0.1;
    }
    else {
        taxPercent = 0.05;
    }
    taxTotal = Number(product.price) * taxPercent;
    total = Number(product.price) + taxTotal + shipping;
    console.log("\n  Product:  ".concat(product.name, "\n  Address:  ").concat(shippingAddress, "\n  Price:    $").concat(Number(product.price).toFixed(2), "\n  Tax:      $").concat(taxTotal.toFixed(2), "\n  Shipping: $").concat(shipping.toFixed(2), "\n  Total:    $").concat(total.toFixed(2), "\n  "));
}
else {
    console.log('Product not found.');
}
