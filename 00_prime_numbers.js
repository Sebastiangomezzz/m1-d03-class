function checkPrime(number) {
    
    if (number === 0 || number === 1) return false
    
    for (let i = 2; i < number; i++) { //contamos a partir de dos
      if (number % i === 0) return false
    }
    return true;
}
