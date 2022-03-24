// cara 1 benar (tanpa dimasukin ke array)
function boxOfAlphabet(param1,param2){
    let boxOfAlphabet = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < param1; i++){
        for(let j = 0; j < param2; j++){
            boxOfAlphabet += alphabet[(i*param2)+j];
        }
        boxOfAlphabet += "\n";
    }
    return boxOfAlphabet;
}
console.log(boxOfAlphabet(6,5));

// cara 2 (masih salah)
function boxOfAlphabet2(param1,param2){
    let boxOfAlphabet = [];
    let alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < param1; i++){
        boxOfAlphabet[i] = "";
        for(let j = 0; j < param2; j++){
            boxOfAlphabet[i] += alphabet[(i*param2)+j];
        }
    }
    return boxOfAlphabet;
}
console.log(boxOfAlphabet2(6,5));
