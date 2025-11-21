const reverseString = function(string) {
    let reversedPhrase = "";
    for(let i = string.length -1; i >= 0; i--){
        reversedPhrase += string[i];
    }
    return reversedPhrase
} 


reverseString("hello")
reverseString("hello world")
reverseString("123! abc! Hello, Odinite.")
reverseString("")

// Do not edit below this line= -1; i >= 0; i--)
module.exports = reverseString;