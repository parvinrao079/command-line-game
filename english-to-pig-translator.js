//creating a function to determine the phrase
function toPigLatin(phrase)
{
    //function to check if a character is indeed a vowel
    function isVowel(char)
    {
        return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
    }

    //function to translate single word to Pig Latin
    function translateWord(word)
    {
        if(isVowel(word[0]))
        {
            // This checks if the first character of the word is a vowel.
            // Add "way" if word starts with a vowel
            return word + "way";
        }
        else if(!isVowel(word[0]) && !isVowel(word[1]))
        {
            // checks if the first two characters of the word are both consonants.
            // Move first two consonants to the end and add "ay"
            return word.slice(2) + word.slice(0, 2) + "ay";
        }
        else
        {
            // checks if the word starts with consonant and followed by a vowel
            // Move first consonant to the end and add "ay"
            return word.slice(1) + word[0] + "ay";
        }
    }

    //Splitting the phrase into words by translating each words and joining them back to string
    return phrase.split(' ').map(translateWord).join(' ');

}

//Gets the input phrase from command line
const inputPhrase = process.argv.slice(2).join(' ');

//Translates the phrase to Pig Latin
const translatePhrase = toPigLatin(inputPhrase);

//Output of the translated phrase in the console
console.log(translatePhrase);

