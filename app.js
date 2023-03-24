
let area;
let width;
let height;

width = window.prompt("wuidth");
height = window.prompt("height");

area= getArea(width, height);

console.log("the area is:", area)

function getArea(width, height){
  let result = width * height;
  return result;
}