let cash = 30;
let price = 40;

if (cash > price){
    console.log(`here is your ${cash - price} dollars change`)
}
else if (cash === price){
    console.log("exact amount")
}
else {
    console.log(`you still owe ${price - cash} dollars`)
}