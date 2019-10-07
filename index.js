function sumTwoSmallestNumbers(numbers) {  
    //Code here
    let sortedNumbers = numbers.sort(function(a, b){return a-b});
    let sum = 0;
    console.log(sortedNumbers);
    for(let i=0;i<2;i++){
      sum += sortedNumbers[i];
    }
    return sum;
  }
  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));