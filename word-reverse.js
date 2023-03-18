function reverseWord(str) {
    let wordSplit = str.split(' ');
    let result = [];
    for (let i = wordSplit.length - 1; i >= 0; i--) {
        const element = wordSplit[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}

const Mywords = 'I am a good boy';
const reversedWord = reverseWord(Mywords);
console.log(reversedWord);