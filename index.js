function boxOfAlphabet(value1, value2){

        let alphabet = ["a","b","c""d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        let result = [];
        for(let i = 0; i < value1; i++){
                let alpha = [];
                for(j = 0; j < value2; j++){
                        result.push(alphabet[i] + alphabet[j]);
                }
        }
        return result;
}

console.log(boxOfAlphabet(1,2));