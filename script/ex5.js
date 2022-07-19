const higherNumber = parseInt(prompt('Enter n (max number of the interval): '));
const resultedArray = []

for (let i = 2; i <= higherNumber; i++) {
    let counter = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            counter = 1;
            break;
        }
    }

    if (i > 1 && counter == 0) {
        resultedArray.push(i)
    }
}

console.log(resultedArray);