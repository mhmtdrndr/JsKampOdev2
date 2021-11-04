// --- 1000' e KADAR OLAN ASAL SAYILAR  --- //
console.log("===========================================================================")
console.log("=_=                   1000' e KADAR OLAN ASAL SAYILAR                   =_=")
console.log("===========================================================================")

let isPrime = true
let newPrimeNumber = []

for (let number = 2; number < 1000; number++) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false
            break
        } else {isPrime = true}
    }

    if (isPrime === true) {
        newPrimeNumber.push(number)
    }

}

newPrimeNumber.forEach(value => {
    console.log(value + ": Asal Sayı")
})
