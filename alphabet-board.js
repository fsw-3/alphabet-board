const boxOfAlphabet = (tinggi, lebar) => {
  // Cara 1
  // Declare the alphabet
  //   let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //   let indexAlph = 0;
  //   //   Declare First Dimension Array
  //   let result = [];

  //   for (let i = 0; i < tinggi; i++) {
  //     //   Declare Second Dimension Array
  //     let arr = [];
  //     for (let j = 0; j < lebar; j++) {
  //       arr.push(alphabet[indexAlph++]);
  //       //   Reset the alph to 0 so it be from 'a' again
  //       if (indexAlph === alphabet.length) {
  //         indexAlph = 0;
  //       }
  //     }
  //     // Push Array arr to Array result so it will be 2 dimension array (array inside array)
  //     result.push(arr);
  //   }

  //   Cara 2
  let asciiCode = 97;
  let result = [];

  for (let i = 0; i < tinggi; i++) {
    //   Declare Second Dimension Array
    let arr = [];
    for (let j = 0; j < lebar; j++) {
      arr.push(String.fromCharCode(asciiCode++));
      //   Reset the alph to 0 so it be from 'a' again
      if (asciiCode > 122) {
        asciiCode = 97;
      }
    }
    // Push Array arr to Array result so it will be 2 dimension array (array inside array)
    result.push(arr);
  }

  return result;
};

console.log(boxOfAlphabet(2, 2));
// output
// [
//   ['a', 'b'],
//   ['c', 'd']
// ]
console.log(boxOfAlphabet(3, 4));
// output
// [
//   ['a', 'b', 'c', 'd'],
//   ['e', 'f', 'g', 'h'],
//   ['i', 'j', 'k', 'l']
// ]
console.log(boxOfAlphabet(6, 5));
// output
// [
//   ['a', 'b', 'c', 'd', 'e'],
//   ['f', 'g', 'h', 'i', 'j'],
//   ['k', 'l', 'm', 'n', 'o'],
//   ['p', 'q', 'r', 's', 't'],
//   ['u', 'v', 'w', 'x', 'y'],
//   ['z', 'a', 'b', 'c', 'd']
// ]
