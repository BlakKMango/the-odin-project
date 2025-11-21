function repeatString(string, num){
    let phrase = "";
    if(num < 0){
        phrase = "ERROR";
    } else {
        for (let i = 0; i < num; i++){
            phrase += string;
        }
    }
    return phrase
}

repeatString("hey", 3)
repeatString("hello", 10)
repeatString("hi", 1)
repeatString("bye", 0)
repeatString("goodbye", -1)
repeatString("hey", Math.floor(Math.random() * 1000))
repeatString("", 10)


// Do not edit below this line
module.exports = repeatString;
