/*let arr = [1, 4, 9, 16];

let newArr = arr.map(element => undefined);
;
console.log(newArr);
*/

let dollars = [1, 5, 10, 3];

let cents = []

for (let i =0; i < dollars.length; i++){
    cents.push(dollars[i] * 100)
}
console.log(cents)