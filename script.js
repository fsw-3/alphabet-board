const boxOfAlphabet = (arr1, arr2) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let count = 0;
  let temp = [];
  let result = [];

  let i = 0;
  while (i < arr1) {
    for (let j = 0; j < arr2; j++) {
      if (count < 26) {
        temp.push(alphabet[count]);
        count++;
      } else {
        temp.push(alphabet[0]);
        count = 1;
      }
    }
    result.push(temp);
    temp = [];
    i++;
  }
  return result;
};

console.log(boxOfAlphabet(2, 2));
console.log(boxOfAlphabet(3, 4));
console.log(boxOfAlphabet(6, 5));
