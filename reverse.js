function reverseArray(text) {
    let reversedString = ''
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reversedString = reversedString + element;
        console.log(element, reversedString);
    }
    return reversedString;
}
const myString = 'i am a good boy '
const reversed = reverseArray(myString);
console.log(reversed);



// this another way out put reversed string 
/* function reverseArray(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}
const myString = 'Hello World';
const reversedString = reverseArray(myString);
console.log(reversedString); */