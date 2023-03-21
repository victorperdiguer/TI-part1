//Ex. 3
const sum = (a, b) => {
    return a%b === 0;
}

//Ex. 4
const firstLetter = (wordList) => {
    return wordList.map(word => word.at(0));
}

//Ex. 5
const median = (numbers) => {
    return numbers.sort((a,b) => a - b)[Math.floor(numbers.length/2)]
}

//Ex. 6
const overAge = (people) => {
    return people.filter(person => person.edad > 18).map(person => person.nombre);
}

//Ex. 7
const inefficientSort = (numbers) => {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        const min = Math.min(...numbers);
        result.push(min);
        //we should remove the number we just added
    }
}

//Ex. 8
const mode = (numbers) => {
}

//Ex. 9
const vocalA = (sentence) => {
    return sentence.split('').filter(char => char === 'a' || char === 'A').length;
}

//Ex. 10
const vocals = (sentence) => {
    return sentence.split('').filter(char => "aeiouAEIOU".includes(char));
}

//Ex. 11
const numVocals = (sentence) => {
    let result = 0;
    for (let char of sentence) {
        "aeiouAEIOU".includes(char) ? result++ : null;
    }
    return result;
}


