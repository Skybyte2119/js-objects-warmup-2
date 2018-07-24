function confirmEnding(word, char){
    var newArray = Array.from(word);

    if(newArray[newArray.length-1] === char){
        return true;
    } else {return false}
}

confirmEnding("Bastian", "n"); // true
confirmEnding("Hold on", "o"); // false