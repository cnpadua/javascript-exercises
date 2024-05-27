const palindromes = function (phrase) {
    phrase = phrase.toLowerCase();
    // console.log(phrase);

    let letters_only = [...phrase.matchAll(/\w/g)];
    // console.log(letters_only);

    phrase = letters_only.join("");
    let reversed_phrase = letters_only.reverse().join("");

    // console.log(phrase);
    // console.log(reversed_phrase);
    return phrase === reversed_phrase;
    
};


// Do not edit below this line
module.exports = palindromes;
