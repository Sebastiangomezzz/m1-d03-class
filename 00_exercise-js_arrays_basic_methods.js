/**
 * Solution of basic methods exercise
 */
//Prime Numbers
 function checkPrime(number) {
    
    if (number === 0 || number === 1) return false
    
    for (let i = 2; i < number; i++) { //contamos a partir de dos
      if (number % i === 0) return false
    }
    return true;
}

//------------------------------------------------
//Digit sum
 function sumDigits(numberToSum) {
    let totalSum = 0

    const splitedNumber = numberToSum.toString().split("")

    splitedNumber.forEach(eachNumber => {
        totalSum += parseInt(eachNumber)
    });
    return totalSum
}

console.log(sumDigits(324564))


//------------------------------------------------
//Pythagoras
function calculateSide(sideA, sideB) {
    let sideC = sideA.SQRTsideA + sideB.SQRTsideB

    return sideC
}

console.log(calculateSide(8, 6))
//returns NaN?

//-----------------------------------------------
//Second Numbers

const numbersArray = [4,2,6,9,5]

const numbersArraySorted = numbersArray.slice().sort();
console.log(numbersArraySorted);

// const numbersArray = [4,2,6,9,5]
// function secondNumbers(numbersArray) {
//     let secondHighNum = 0;
//     let secondLowNum = 0;
//     let numberToCompare 
    
//     numbersArray.forEach(numberToCompare => {
//         if (secondHighNum < numberTocompare) {
//             secondHighNum = numberToCompare
//             return secondHighNum
//         } 
//         if(secondLowNum > numberToCompare){
//             secondLowNum = numbertocompare
//             return secondLowNum
//         }
//     });
// }
// console.log(secondNumbers(numbersArray));
//=> second lowest: 4
//=> second highest: 6
