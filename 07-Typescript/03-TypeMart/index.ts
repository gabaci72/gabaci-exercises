import products from './products';

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

const shippingAddress: string = '123 Main St, Anytown, USA';
const productName: string = 'fanny pack';

let product: { name: string; price: string; preOrder: string } | undefined;

for (const p of products) {
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
  } else {
    shipping = 5;
  }

  if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
  } else {
    taxPercent = 0.05;
  }

  taxTotal = Number(product.price) * taxPercent;
  total = Number(product.price) + taxTotal + shipping;

  console.log(`
  Product:  ${product.name}
  Address:  ${shippingAddress}
  Price:    $${Number(product.price).toFixed(2)}
  Tax:      $${taxTotal.toFixed(2)}
  Shipping: $${shipping.toFixed(2)}
  Total:    $${total.toFixed(2)}
  `);
} else {
  console.log('Product not found.');
}