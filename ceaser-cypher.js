// Function to encrypt a phrase using Caesar Cipher
function caesarCipher(str, shift) 
{
    // function to shift a single char
    const shiftChar = (char, shift) => 
    {
        // checks if char is upper case
        const isUpperCase = char >= 'A' && char <= 'Z';
        // checks if char is lower case
        const isLowerCase = char >= 'a' && char <= 'z';
        
        // condition to check if char is a letter, if it is not a letter it will return as it is
        if (!isUpperCase && !isLowerCase) return char;

        // Determine base ASCII(American Standard Code for Information Interchange) code for case (uppercase or lowercase)
        // ASCII codes help determine the position of a character in the alphabet and calculate its shifted position
        const baseCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);

        // Calculate new character code with shift and modulo 26 for wrap-around
        // 26 represents the total number of letters in the English alphabet
        const newCharCode = (char.charCodeAt(0) - baseCode + shift) % 26;
        
        // Adjust for negative shift values
        return String.fromCharCode(baseCode + (newCharCode < 0 ? newCharCode + 26 : newCharCode));
    }

    // Convert the input string into an array of characters and shift each character
    return str.split('').map(char => shiftChar(char, shift)).join('');
}

// Parse the command line arguments
// Get command line arguments (skip first two)
const args = process.argv.slice(2);

// First argument is the phrase to encrypt
const phrase = args[0];

// Second argument is the shift value, converted to an integer
const shift = parseInt(args[1], 10);

// Check if the shift value is a valid number
if (isNaN(shift)) 
{
    // Print error message and exit if invalid
    console.error('Shift value should be a valid number');
    process.exit(1);
}

// Encrypt the phrase and output the result
const encryptedPhrase = caesarCipher(phrase, shift);
console.log(encryptedPhrase);