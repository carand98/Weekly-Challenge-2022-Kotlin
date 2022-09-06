// RETO 3 - NUMEROS PRIMOS 1 - 100

function isPrime(number) {
  if (number <= 1) return false;
  for (var i = 2; i <= number; i++) {
    if (number % i == 0) return false;
  }
  return true;
}
var primeNumbers = [];
for (let index = 1; index <= 100; index++) {
  if (isPrime(index) == true) {
    primeNumbers.push(index);
  }
}

console.log(primeNumbers);
