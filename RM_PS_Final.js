// 1
const sum = (a, b) => {
    return a + b;
}

// 2
const multiply = (a, b) => {
    return a * b;
}

// 3
const oddEven = (num) => {
    if (num % 2 === 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}

// 4
const returnNegative = (num) => {
    if (num > 0) {
        return -num;
    } else {
        return num;
    }
}

// 5
const returnPositive = (num) => {
    if (num < 0) {
        return -num;
    } else {
        return num;
    }
}

// 6
const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// 7
const sleepIn = (weekday, vacation) => {
    if (!weekday || vacation) {
        return true;
    } else {
        return false;
    }
}

// 8
const monkeyTrouble = (aSmile, bSmile) => {
    if (aSmile && bSmile || !aSmile && !bSmile) {
        return true;
    } else {
        return false;
    }
}

// 9
const sumDouble = (a, b) => {
    if (a === b) {
        return 2 * (a + b);
    } else {
        return a + b;
    }
}

// 10
const diff21 = (n) => {
    if (n <= 21) {
        return 21 - n;
    } else {
        return 2 * (n - 21);
    }
}

// 11
const parrotTrouble = (talking, hour) => {
    if (talking && (hour < 7 || hour > 20)) {
        return true;
    } else {
        return false;
    }
}

// 12
const makes10 = (a, b) => {
    if (a === 10 || b === 10 || a + b === 10) {
        return true;
    } else {
        return false;
    }
}

// 13
const nearHundred = (n) => {
    if ((Math.abs(100 - n) <= 10) || (Math.abs(200 - n) <= 10)) {
        return true;
    } else {
        return false;
    }
}

// 14
const posNeg = (a, b, negative) => {
    if (negative) {
        return a < 0 && b < 0;
    } else {
        return (a < 0 && b > 0) || (a > 0 && b < 0);
    }
}

// 15
const notString = (str) => {
    if (str.startsWith('not')) {
        return str;
    } else {
        return 'not ' + str;
    }
}

// 16
const compareTriplets = (a, b) => {
    let scoreA = 0;
    let scoreB = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            scoreA++;
        } else if (a[i] < b[i]) {
            scoreB++;
        }
    }

    return [scoreA, scoreB];
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));


