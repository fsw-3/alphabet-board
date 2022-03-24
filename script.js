let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function alphabetBoard(row, col) {
    let result = new Array();
    let counter = 0;

    for (let i = 0; i < row; i++) {
        let inner = new Array();
        for (let j = 0; j < col; j++) {
            inner.push(alphabet[counter]);
            counter++;
            // if counter exceeds the number of alphabet, reset the counter
            if (counter === alphabet.length) {
                counter = 0;
            }
        }
        result.push(inner);
    }
    return result;
}

console.log(alphabetBoard(2, 2));
console.log(alphabetBoard(3, 4));
console.log(alphabetBoard(6, 5));