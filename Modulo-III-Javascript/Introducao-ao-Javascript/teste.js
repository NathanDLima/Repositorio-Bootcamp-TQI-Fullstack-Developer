function returnEvenValues(array) {
    let evenNums = [];
    let notEvenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        }
        else {
            notEvenNums.push(array[i]);
        }
    }
    console.log("Os números pares do array: ", evenNums);
    console.log("Os números impares do array: ", notEvenNums);
}

let array = [1, 2, 4, 9, 12, 15];

returnEvenValues(array);