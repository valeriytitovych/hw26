(function () {
    function sumRangeNumbers(arr) {
        const m = Math.min(...arr)
        const n = Math.max(...arr)

        const range = Array.from(Array(n - m + 1), (_, i) => m + i)

        return range.reduce((a, b) => a + b)
    }

    console.log(sumRangeNumbers([1, 4]));
})();

(function () {
    function maxDevider(a, b) {
        if (b > a) {
            return maxDevider(b, a);
        }
        if (!b) {
            return a;
        }
        return maxDevider(b, a % b);
    }

    console.log(maxDevider(12, 18));
})();

(function () {
    function allDivisors(a) {
        const array = []

        for (let i = 2; i < a; i++) {
            Number.isInteger(a / i) && array.push(i)
        }

        if (array.length === 0) {
            return `${a} is prime`
        } else {
            return array
        }
    }

    console.log(allDivisors(24));
})();

(function () {
    function numberLenght(a) {
        for (var i = 0; a > 1; i++) {
            a /= 10;
        }
        return i;
    }

    console.log(numberLenght(1234567890));
})();


(function () {
    var array = prompt('Enter 10 numbers with spaces').split(' ');

    function counter(array) {
        var counter = [0, 0, 0];
        array.forEach(function (a) {
            if (a < 0)
                counter[0]++;
            else if (a > 0)
                counter[2]++;
            else
                counter[1]++;
        });
        return counter;
    }

    console.log('Amount of Negative, Zero and Positive numbers are : ' + counter(array));
})();

(function () {
    while (true) {
        const a = +prompt('Enter first number');
        const b = +prompt('Enter second number');
        const op = prompt('Choose action - + / *');
        const action = {
            '+': () => a + b,
            '-': () => a - b,
            '/': () => a / b,
            '*': () => a * b
        }[op];
        if (action) console.log(action());

        if (!confirm('Do you want to calculate more?')) break;
    }
})();

(function () {
    let str = prompt("Enter a number");
    let a = prompt("Enter a number to move this number?");

    console.log(str.slice(a) + str.slice(0, a));
})();

(function () {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let currentDay = 0;

    while (confirm(`${days[currentDay]}. Do you want to know next day?`)) {
        currentDay = (currentDay + 1) % days.length;
    }
})();

(function () {
    var i, j;

    document.write('<table>')

    for (i = 2; i <= 10; i++) {
        document.write('<tr>');
        for (j = 2; j < 10; j++) { document.write('<td>' + j + '&times;' + i + '=' + (i * j) + '</td>') }
        document.write('</tr>')
    }

    document.write('</table>')
})();

(function () {
    const n = 0;
    const m = 100;
    let start = n;
    let end = m;

    while (true) {
        let num = Math.floor((start + end) / 2);
        let answer = prompt(num + ' Is it your number ? - y (yes), - b (biger), -  l (lower)');

        if (answe == 'y') {
            alert('Got it');
            break;
        }
        if (answer == 'l') {
            end = num - 1;
        }
        if (answer == 'b') {
            start = num + 1;
        }
    }
})();