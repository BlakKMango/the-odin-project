const removeFromArray = function(arr, ...valuesToRemove) {
    return arr.filter(n => !valuesToRemove.includes(n))
};

removeFromArray(["hey", 2, 3, "ho"], "hey", 3)

// Do not edit below this line
module.exports = removeFromArray;