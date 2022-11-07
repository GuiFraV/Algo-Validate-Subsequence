function isValidSubsequence(array, sequence) {

    let x = [];
    let y = 0;

    for(let i = 0; i<array.length; i++){

        for(let j = 0; j<sequence.length; j++){
            
            if(array[i] == sequence[j] && y < sequence.length){
                
                array.shift();
                x.push(sequence[j]);
                y++;

            }
        }
        
    }

    console.log(x);

    if(x.toString() == sequence.toString()){
        return true;
    }else{
        return false;
    }

}
  
// const output = isValidSubsequence([1, 1, 1, 1, 1], [1, 1, 1]);
const output = isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);

console.log(output);