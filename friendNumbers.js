// --- ARKADAŞ SAYILAR --- //
console.log("===========================================================================")
console.log("=                          ARKADAŞ SAYILAR                                =")
console.log("===========================================================================")

let friendNumber = (number1, number2) =>{
    let sum = 0
    for (let i = 0; i < number1; i++) {
        if (number1 % i == 0){
            sum += i
        } 
    }

    if (sum == number2){
        console.log("Girilen " + number1 + " ve " + number2 + " arkadaş sayılar" )
    } else [
        console.log("Girilen " + number1 + " ve " + number2 + " arkadaş sayı değildir !!!" )
    ]
} 

friendNumber(284,220)
friendNumber(17296,18416)
friendNumber(1184,1210)