function caesarCipher(str, shift) 
{
    // Function to handle the shifting of a single character
    const shiftChar = (char, shift) => 
    {
        const isUpperCase = char >= 'A' && char <= 'Z';
        const isLowerCase = char >= 'a' && char <= 'z';
        
        if (!isUpperCase && !isLowerCase) return char;

        const baseCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        const newCharCode = (char.charCodeAt(0) - baseCode + shift) % 26;

        return String.fromCharCode(baseCode + (newCharCode < 0 ? newCharCode + 26 : newCharCode));
    }

    // Convert the input string into an array of characters and shift each character
    return str.split('').map(char => shiftChar(char, shift)).join('');
}

// Parse the command line arguments
const args = process.argv.slice(2);
const phrase = args[0];
const shift = parseInt(args[1], 10);

if (isNaN(shift)) 
{
    console.error('Shift value should be a valid number');
    process.exit(1);
}

// Encrypt the phrase and output the result
const encryptedPhrase = caesarCipher(phrase, shift);
console.log(encryptedPhrase);