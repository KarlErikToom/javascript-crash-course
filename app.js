
document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox")
    const visaBtn = document.getElementById("visaBtn")
    const mastercardBtn = document.getElementById("mastercardBtn")
    const paypalBtn = document.getElementById("paypalBtn")


 if(myCheckBox.checked){
    console.log("you are subbed");
 }
 else{
    console.log("you are not subbed");
 }


 if (visaBtn.checked){
    console.log("you paying with visa")
 }

 else if(mastercardBtn.checked){
    console.log("you paying with mastercard")
 }

 else if(paypalBtn.checked){
    console.log("you are paying with paypal")
 }

 else{
    console.log("please choose a payment method")
 }

}