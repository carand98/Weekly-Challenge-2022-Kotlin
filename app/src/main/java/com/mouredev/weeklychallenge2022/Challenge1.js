// RETO 1 - ¿ES UN ANAGRAMA?

function isAnagram(firstWord, secondWord) {
    if (firstWord.toLowerCase() == secondWord.toLowerCase()) {
        return false;
    } else {
        firstWord.toLowerCase().split("").sort().join("") == secondWord.toLowerCase().split("").sort().join("");
    }
}