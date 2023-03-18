
// tallest Number in array 

function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const heights = [133, 124, 143, 122, 142, 154, 244];
const tallest = maxInArray(heights);
console.log(tallest);

// lowest Number in array 

function minInArray(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i]
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}

const height = [122, 142, 111, 124, 153, 156, 166];
const lowest = minInArray(height);
console.log(lowest)