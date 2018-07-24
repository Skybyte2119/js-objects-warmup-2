function repeatStringNumTimes(text, number){
    var final="";
   
    if(typeof number === "number" && number > 0){
        final = text.repeat(number);
    }
    return final;
}

repeatStringNumTimes("hello", 5); // "hellohellohellohellohello"
repeatStringNumTimes("abc", 3); // "abcabcabc"
repeatStringNumTimes("abc", "2"); // ""
repeatStringNumTimes("mr_robot", -1); // ""
repeatStringNumTimes("friend?", "5"); // ""