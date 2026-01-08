const palindromes = function (word) {
    const converted = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    const reversed = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split("").reverse().join("")
    return converted === reversed ? true : false;
};

//  palindromes("I don't think this is w0rKi4g")


// Do not edit below this line
module.exports = palindromes;
