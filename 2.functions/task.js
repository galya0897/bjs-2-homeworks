function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  const sum = arr.reduce(function (currentSum, currentNumber) {
    return currentSum + currentNumber
  }, 0)
  let lenghtArr = arr.length;
  let avg = Number((sum / lenghtArr).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

  const sum = arr.reduce(function (currentSum, currentNumber) {
    return currentSum + currentNumber
  }, 0)
  return sum
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0
  }

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return max - min
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length === 0) {
    return 0
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let camelCase = 0;

  if (arr.length === 0) {
    return 0
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      camelCase++
    }
  }
  return sumEvenElement / camelCase;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;

}
