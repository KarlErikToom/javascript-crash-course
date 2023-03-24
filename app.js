
let symbol = window.prompt("enter symbol")
let rows = window.prompt("enter # of rows");
let columns = window.prompt("enter # of columns")

for (let i=1; i <=rows; i+=1){
    for (let j=1; j <=columns; j+=1){
    document.getElementById("myRectangle").innerHTML += symbol;
 }
 document.getElementById("myRectangle").innerHTML += "<br>";
}