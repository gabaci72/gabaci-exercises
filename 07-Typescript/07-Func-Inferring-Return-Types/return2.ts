// function ouncesToCups(ounces: number) {
//   return `${ounces / 16} cups`;
//  }
// const liquidAmount: number = ouncesToCups(3);
// Type 'string' is not assignable to type 'number'.'

function ouncesToCups(ounces: number): number {
  return ounces / 16; // sadece sayıyı döndür
}

const liquidAmount: number = ouncesToCups(3);
console.log(liquidAmount);
console.log(liquidAmount.toFixed())