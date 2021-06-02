/**
 * Solution of basic methods exercise
 */
 function sumDigits(numberToSum) {
    let totalSum = 0

    const splitedNumber = numberToSum.toString().split("")

    splitedNumber.forEach(eachNumber => {
        totalSum += parseInt(eachNumber)
    });
    return totalSum
}

console.log(sumDigits(324564))



function calculateSide(sideA, sideB) {
    let sideC = sideA.SQRTsideA + sideB.SQRTsideB
    return sideC
}

console.log(calculateSide(8, 6))