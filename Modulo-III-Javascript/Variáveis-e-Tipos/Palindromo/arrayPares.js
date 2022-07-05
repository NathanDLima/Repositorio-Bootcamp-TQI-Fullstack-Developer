function substituiPares(array) {
    if(!array) return -1;
    if(!array.length) return -1;

    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Já é zero!");
        }else if(array[i] % 2 === 0){
            console.log(`Substituindo o valor ${array[i]}`);
            array[i] = 0;  
        }
        
    }

    return array;
}

let vet = [2, 6, 9, 14, 23, 27, 101, 144];
console.log(substituiPares(vet));