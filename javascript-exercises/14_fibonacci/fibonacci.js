const fibonacci = function(num) {
    let fibArray = [1, 1,]
    let a = fibArray[fibArray.length - 2]
    let b = fibArray[fibArray.length - 1]
    num = Number(num)
    
    if (num < 0) {
        return "OOPS"
    } else if (num === 0) {
        return 0
    }

    for (let i = 2; i < num; i++) {
        fibArray.push(a + b)
        let a = fibArray[fibArray.length - 2]
        let b = fibArray[fibArray.length - 1]

    }
    console.log(fibArray[num - 1])
    return fibArray[num - 1]
};


// Do not edit below this line
module.exports = fibonacci;



// 1, 1, 2, 3, 5, 8
