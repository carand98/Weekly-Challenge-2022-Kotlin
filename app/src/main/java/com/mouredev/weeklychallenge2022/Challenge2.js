// RETO 2 - SUCESION DE FIBONACCI

function fibonacciSequence() {
  var numberList = [];
  let sequenceLenght = 50;

  for (let index = 0; index < sequenceLenght; index++) {
    if (index < 2) {
      numberList.push(index);
    } else {
      numberList.push(numberList[index - 2] + numberList[index - 1]);
    }
  }

  console.log(numberList);
}
