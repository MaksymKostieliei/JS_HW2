const example = [1, 1, 1, 0, 0, 1];
let exampleToString = '';

for (let i = 0; i < example.length; i++) {
    exampleToString = exampleToString + example[i]; 
}

const neededNumber = parseInt(exampleToString, 2);
console.log(neededNumber);