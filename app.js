
let count = 0;

document.getElementById("increasebutton").onclick = function(){
  count +=1;
  document.getElementById("myLabel").innerHTML = count;
}
document.getElementById("decreasebutton").onclick = function(){
  count -=1;
  document.getElementById("myLabel").innerHTML = count;
}





/*
function increaseCount(){
count+=1;
document.getElementById("myLabel").innerHTML = count;
}
function decreaseCount(){
count-=1;
document.getElementById("myLabel").innerHTML = count;
}*/