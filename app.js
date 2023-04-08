
let prices = [5, 10, 15, 20, 25, 5];
let total = prices.reduce(checkOut);

console.log(`the toal is $${total}`)


function checkOut(total, element){
  return total + element;
}