let ages = [18, 10, 20, 34, 52];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element){
  return element >= 18;
}

function print(element){
  console.log(element)
}