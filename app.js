
let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatos"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

groceryList[2][2] = "steak"


for(let list of groceryList){
    for(let food of list){
      console.log(food)
    }
}