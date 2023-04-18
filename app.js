/**Write a for-loop that loops through 1 to 20
 * if the number is divisible by 3, print "frontend"
 * if the number is divisible by 5, print "simplified"
 * if the number is divisible by 3 and 5, print "frontend simplified"
 * if the number is *not* divisible by either 3 or 5, print the number
 * 
 * @example
 * 1 -> 1
 * 2 -> 2
 * 3 -> "frontend"
 * 4 -> 4
 * 5 -> "simplified"
 * ...
 * 15 -> "frontend simplified"
 * ...
 * 20 ->simplified
 */

for ( let i =1; i<=20; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`${i} -> Frontend Simplified`)
    }
    else if ( i % 3 === 0){
        console.log(`${i} -> Frontend`)
    }
    else if ( i % 5 ===0){
        console.log(`${i}-> Simplified`)
    }
    else{
        console.log(`${i} -> ${i}`)
    }
}
