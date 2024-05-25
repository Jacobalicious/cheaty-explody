// List of words to check
const words = [
    "ABOUT", "AFTER", "AGAIN", "BELOW", "COULD", "EVERY", "FIRST", "FOUND", "GREAT", "HOUSE",
    "LARGE", "LEARN", "NEVER", "OTHER", "PLACE", "PLANT", "POINT", "RIGHT", "SMALL", "SOUND",
    "SPELL", "STILL", "STUDY", "THEIR", "THERE", "THESE", "THING", "THINK", "THREE", "WATER",
    "WHERE", "WHICH", "WORLD", "WOULD", "WRITE"
];

const inputValue = document.getElementById('input');
const response = document.getElementById('response');
const question = document.getElementById('question');
let questionCounter = 0;
let firstChar = "";
let fourthChar = "";

// Create an empty list to store matching words
let matchingFirstLetter = [];
let matchingWords = [];

question.innerText = `List 1st Characters`;

const submit = () => {
    const input = inputValue.value; // Get user input inside the submit function
    if (questionCounter == 0) {
        firstChar = input;
        question.innerText = `List 4th Characters`;
        questionCounter += 1;
    } else {
        fourthChar = input;
        // Call the checker function for the first characters
        checker(firstChar, words, 0, matchingFirstLetter);

        // Call the checker function for the fourth characters, using the previous matching words
        checker(fourthChar, matchingFirstLetter, 3, matchingWords);

        // Print out the matching words
        response.innerText = "Matching words:\n" + matchingWords.join('\n'); // Display matching words in the response element
        for (let word of matchingWords) {
            console.log(word);
        }
    }
}

function checker(numChar, wordList, pos, newList) {
    // Loop through each character in the user's input
    for (let char of numChar) {
        // Loop through each word in the list
        for (let word of wordList) {
            // Check if the letter at the specified position of the word matches the current character
            if (word[pos].toLowerCase() === char.toLowerCase()) {
                // If it matches, add the word to the newList
                newList.push(word);
            }
        }
    }
}

const reset = () => {
    questionCounter = 0;
    firstChar = "";
    fourthChar = "";

    // Create an empty list to store matching words
    matchingFirstLetter = [];
    matchingWords = [];
    question.innerText = `List 1st Characters`;
    response.innerText = ''; // Clear the response text
}
