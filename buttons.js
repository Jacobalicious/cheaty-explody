const flashingColorRules = {
    "b": "4",
    "y": "5",
    "": "1"  // Default value if the input is not "b" or "y"
};

const inputValue = document.getElementById('input')
const response = document.getElementById('response')
const questions = document.getElementById('questions')
let responseCounter = 0;
let color = ''; // Declare color outside to make it available globally

questions.innerText = `What's the Color?`

const submit = () => {
    const input = inputValue.value;
    if (responseCounter == 0){
        color = input; // Assign the value to the global color variable
        questions.innerText = `What's the Label?`
        responseCounter += 1;
    }
    else if (responseCounter == 1){
        const label = input;
        if (label === "d") {
            questions.innerText = `How Many Batteries are there?`
            responseCounter += 1;
        }
        else if (color === "r" && label === "h"){
            response.innerText = `Click!`;
        }else {
            questions.innerText = `Hold Plz :), What Color is FLashing?`
            responseCounter += 2;
        }    
    }
    else if (responseCounter == 2){
        const batteries = input;
        if (batteries > 1) {
           response.innerText = `Click!`
        } else {
            questions.innerText = `Hold Plz :), What Color is FLashing?`
            responseCounter += 1;
        }
    }
    else if (responseCounter == 3){
        const flashing = input;
        response.innerText = `Release at ${flashingColorRules[flashing] || "1"}`
    }
}

const reset = () => {
    responseCounter = 0;
    questions.innerText = `What's the Color?`
}
