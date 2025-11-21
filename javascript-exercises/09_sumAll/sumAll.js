const sumAll = function(a, b) {

    let start = Math.min(a, b);
    let stop = Math.max(a, b);

    if (!Number.isInteger(start) || !Number.isInteger(stop) || typeof a !== 'number' || typeof b !== 'number') {
        return "ERROR";
    }

    const range = (start, stop, step = 1) =>
        Array.from(
            { length: Math.ceil((stop - start) / step) },
            (_, i) => start + i * step
        );

    const numbersToSum = range(start, stop + 1, 1);
    const total = numbersToSum.reduce((sum, num) => sum + num, 0)

    if (total < 0) {
        return 'ERROR'
    }

    return total
}


sumAll(2, 4)
sumAll(1, 4000)
sumAll(123, 1)
sumAll(-10, 4)
sumAll(2.5, 4)
sumAll(10, "90")
sumAll(10, [90, 1])

// Do not edit below this line
module.exports = sumAll;
