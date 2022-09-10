// Write a function that returns the number of vowels found within a string.
// Vowel characters are 'a', 'e', 'i', 'o', and 'u'.
// Make sure the function is case insensitive!
// --- Examples
//   vowels('What') --> 1
//   vowels('Why?') --> 0
//   vowels('aEiOu') --> 5
//   vowels('I am a world-class developer using iterations') --> 16

const vomel = string => {
    const vomelRegex = /[aiueo]/gi;
    const vomelString = string.match(vomelRegex)
    let vomelResult = vomelString.length
    console.log(vomelResult)
}
vomel('I am a world-class developer using iterations')
