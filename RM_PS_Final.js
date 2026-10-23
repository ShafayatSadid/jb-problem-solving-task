// 01
var solveMeFirst = (a, b) => {
    return a + b;
}

// 02
var multiply = (a, b) => {
    return a * b;
}

// 03
var evenOrOdd = (number) => {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

// 04
var makeNegative = (number) => {
    if (number > 0) {
        return -number;
    } else {
        return number;
    }
}

// 05
var opposite = (number) => {
    return -number;
}

// 06
var simpleArraySum = (ar) => {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}

// 07
var sleepIn = (weekday, vacation) => {
    if (!weekday || vacation) {
        return true;
    } else {
        return false;
    }
}

// 08
var monkeyTrouble = (aSmile, bSmile) => {
    if (aSmile && bSmile || !aSmile && !bSmile) {
        return true;
    } else {
        return false;
    }
}

// 09
var sumDouble = (a, b) => {
    if (a === b) {
        return 2 * (a + b);
    } else {
        return a + b;
    }
}

// 10
var diff21 = (n) => {
    if (n <= 21) {
        return 21 - n;
    } else {
        return 2 * (n - 21);
    }
}

// 11
var parrotTrouble = (talking, hour) => {
    if (talking && (hour < 7 || hour > 20)) {
        return true;
    } else {
        return false;
    }
}

// 12
var makes10 = (a, b) => {
    if (a === 10 || b === 10 || a + b === 10) {
        return true;
    } else {
        return false;
    }
}

// 13
var nearHundred = (n) => {
    if ((Math.abs(100 - n) <= 10) || (Math.abs(200 - n) <= 10)) {
        return true;
    } else {
        return false;
    }
}

// 14
var posNeg = (a, b, negative) => {
    if (negative) {
        return a < 0 && b < 0;
    } else {
        return (a < 0 && b > 0) || (a > 0 && b < 0);
    }
}

// 15
var notString = (str) => {
    if (str.startsWith('not')) {
        return str;
    } else {
        return 'not ' + str;
    }
}

// 16
var compareTriplets = (a, b) => {
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

// 17
var aVeryBigSum = (ar) => {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}

// 18
var staircase = (n) => {
    let result = '';
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);
        let hashes = '#'.repeat(i);
        if (i === n) {
            result += spaces + hashes;
        } else {
            result += spaces + hashes + '\n';
        }
    }
    return result;
}

// 19
var gradingStudents = (grades) => {
    let result = [];
    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];
        if (grade < 38) {
            result.push(grade);
        } else {
            let nextMultiple = Math.ceil(grade / 5) * 5;
            if (nextMultiple - grade < 3) {
                result.push(nextMultiple);
            } else {
                result.push(grade);
            }
        }
    }
    return result;
}

// 20
var timeConversion = (s) => {
    let period = s.slice(-2);
    let time = s.slice(0, -2);
    let parts = time.split(':');
    let hour = parseInt(parts[0]);

    if (period === 'AM') {
        if (hour === 12) {
            hour = 0;
        }
    } else {
        if (hour !== 12) {
            hour = hour + 12;
        }
    }

    let hourStr = hour.toString().padStart(2, '0');
    return hourStr + ':' + parts[1] + ':' + parts[2];
}

// 21
var repeatStr = (n, s) => {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += s;
    }
    return result;
}

// 22
var solution = (str) => {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

// 23
var positiveSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// 24
var summation = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// 25
var booleanToString = (b) => {
    if (b) {
        return 'true';
    } else {
        return 'false';
    }
}