function walkingBoard(row,column){
    // let string='*';
    let result=[];
    
    for(let i=0;i<row;i++){
        let array=[];
        for(let j=0;j<column;j++){
            array.push('*');
            // console.log(array);
            console.log('\n');
        }
        result.push(array); 
    }
    return result;
}

console.log(walkingBoard(2,2));