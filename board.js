function board(row, column) {
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let result = [];
    let num = 0;

    for(i = 0; i < row; i++){
        result[i] = [];
        for(j = 0 ; j < column; j++){
            result[i][j] = alphabets[j + num];
        }
        num += j;
    }

    return console.log(result);
}

board(3, 3)
