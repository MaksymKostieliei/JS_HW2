const amount = 24;
let fatherArray = [];
let kidArraySize = 3;
let godArray = [];
let index;


function getArray() {
    if (amount % 3 === 0) {
        for (let i = 0; i < amount; i++) {
            index = i;
            fatherArray.push(++index);
        }

        for (let i = 0; i < fatherArray.length / kidArraySize; i++) {
            godArray[i] = fatherArray.slice((i * kidArraySize), (i * kidArraySize) + kidArraySize);
        }

        return godArray;
    }
    else {
        return 'Wrong amount! It shoud be multiple of 3'
    }
}

const array = getArray();
console.log(array);
