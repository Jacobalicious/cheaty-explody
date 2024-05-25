const red = ["C","B","A","AC","B","AC","ABC","AB","B"];
const blue = ["B","AC","B","A","B","BC","C","AC","A"];
const black = ["ABC","AC","B","AC","B","BC","AB","C","C"];

let counters = {
    redCounter: 0,
    blueCounter: 0,
    blackCounter: 0
};

const submit = () => {
    const inputValue = document.getElementById('input');
    const response = document.getElementById('response');
    input = inputValue.value;
    if (input[0] == "r"){
        check(red, 'redCounter');
    } else if (input[0] == "b"){
        check(blue, 'blueCounter');
    } else if (input[0] == "p"){
        check(black, 'blackCounter');
    }
}

const reset = () => {
    counters.redCounter = 0;
    counters.blueCounter = 0;
    counters.blackCounter = 0;
}

function check(color, colorCounter) {
    const response = document.getElementById('response');
    if (color[counters[colorCounter]].includes(input[1])) {
        response.innerText = `Cut!`;
    } else {
        response.innerText = `Pass!`;
    }
    counters[colorCounter] += 1;
    console.log(color);
    console.log(counters[colorCounter]);
}
