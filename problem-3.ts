{
    const countWordOccurrences = (sentence:string, word:string):number => {
        const sentenceInLowerCase = sentence.toLowerCase();
        const wordInLowerCase = word.toLowerCase();
        return sentenceInLowerCase.split(" ").filter((word:string)=> word === wordInLowerCase).length;
    }
    countWordOccurrences("I love typescript", "typescript");
}