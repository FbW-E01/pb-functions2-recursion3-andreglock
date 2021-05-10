function fibonacciNonRecursive(number) {
    const array = [];
    let n1 = 0;
    let n2 = 1;
    for (let i = 0; i <= number; i++) {
        array.push(n1);
        const nNext = n1 + n2;
        n1 = n2;
        n2 = nNext;
    }
    return array;
};

function fibonacci(number) {
    if (number === 1) { return [0, 1] }
    else if (number < 0) { return undefined } // Sanity check
    else if (number === 0) { return [0] } // Sanity check
    else {
        let numberValue = fibonacci(number - 1);
        numberValue.push(numberValue[numberValue.length - 1] + numberValue[numberValue.length - 2]);
        return numberValue;
    }
};


//console.log(fibonacciNonRecursive(8));
console.log(fibonacci(8));
console.log(fibonacci(0));
console.log(fibonacci(-3));