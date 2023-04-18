/*let arr = [20, 30, 40, 50, 100,];

let newArr = arr.filter(element => element < 50
);

console.log(newArr);
*/

/**
 * Filter out all the `FAIL` elements in an array
 *
 * @example
 * [`A+`, `A`, `FAIL`] => [`A+`, `A`]
 * [`FAIL`, `FAIL`, `B`] => [`B`]
 * [`FAIL`] => []
 */

let grades = [`A+`, `A`, `FAIL`];

let goodGrades = grades.filter(element =>element !== `FAIL`);
;
console.log(goodGrades);
