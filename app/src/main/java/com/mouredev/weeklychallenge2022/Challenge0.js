//Challenge 0 - Reto "FIZZ BUZZ"

var numbersList = [];

function generateList() {
  for (let index = 1; index <= 100; index++) {
    numbersList.push(index);
  }
}

function checkMultiples(numList) {
  numList.forEach( (number, index) => {
    if (number % 3 == 0 && number % 5 == 0) {
      numList[index] = "FIZZBUZZ";
    } else {
      number % 3 == 0 ? (numList[index] = "FIZZ") : false;
      number % 5 == 0 ? (numList[index] = "BUZZ") : false;
    }
  });
}

generateList();
checkMultiples(numbersList);
console.log(numbersList);
