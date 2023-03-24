
let myNum = 54;

//myNum = myNum.toLocaleString("en-US");  US ENGLISH

//myNum =myNum.toLocaleString("hi-IN"); HINDI

//myNum = myNum.toLocaleString("de-DE") Standard German

//myNum = myNum.toLocaleString("en-US",{style: "currency", currency:"USD" } )
//myNum = myNum.toLocaleString("hi-IN",{style: "currency", currency:"INR" } )
//myNum = myNum.toLocaleString("de-DE",{style: "currency", currency:"EUR" } )


//myNum = myNum.toLocaleString(undefined, {style: "percent"})


myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius" })
console.log(myNum)