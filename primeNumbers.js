// --- ASAL SAYILAR --- //
console.log("===========================================================================")
console.log("=                             ASAL SAYI                                   =")
console.log("===========================================================================")

let findPrime = (...number) => {

    number.forEach(value => {

        let isPrime = true

        if (value <= 1) {
            console.log("Girilen sayı asal sayı olamaz : " + value)

        } else {
            for (let i = 2; i < value; i++) {                           
                if (value % i == 0) {
                    isPrime = false   
                    break 
                }
            }
    
            if (isPrime == true) {
                console.log(value + " sayısı ASAL  !!!")
            } else{
                console.log(value + " sayısı ASAL DEĞİL !!!")
            } 
        }
    })
}

findPrime(-1,-2,1,2,6,9,11)