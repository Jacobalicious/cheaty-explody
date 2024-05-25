morseCode = {
    "... .... . .-.. .-..": " 3.505",
    ".... .- .-.. .-.. ...": " 3.515",
    "... .-.. .. -.-. -.-": " 3.522",
    "... - .. -. --.": " 3.592",
    "... - . .- -.-": " 3.582",
    "...- . -.-. - --- .-.": " 3.595",
    "... - .-. --- -... .": " 3.545",
    "..-. .-.. .. -.-. -.-": " 3.555",
    ".-.. . .- -.- ...": " 3.542",
    "-... .. ... - .-. ---": " 3.552",
    "-... . .- - ...": " 3.600",
    "-... .-. .. -.-. -.-": " 3.575",
    "-... .-. . .- -.-": " 3.572",
    "-... --- -- -... ...": " 3.565",
    "- .-. .. -.-. -.-": " 3.532",
    "-... --- -..- . ...": " 3.535"
}



const inputValue = document.getElementById('input')
const respone = document.getElementById('response')

input.addEventListener('input', function() {
    const input = inputValue.value
    if (input == ""){
        response.innerText = "";
    }
    else {
    response.innerText = getValuesStartingWith(input);
    }

})

// Function to filter keys that start with the given prefix and get their values
function getValuesStartingWith(input) {
    const result = [];
  
    for (const key in morseCode) {
      if (key.startsWith(input)) {
        result.push(morseCode[key]);
      }
    }
  
    return result;
  }