{
    const removeDuplicates = (numbers:number[]):number[] => {
        const uniqueNumbers: number[] = [];
        for(const number of numbers){
            if(!uniqueNumbers.includes(number)){
                uniqueNumbers.push(number);
            }
        }
        return uniqueNumbers;
    }
    
    removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
}