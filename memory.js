// Position and Label
let saves = {};

const display = {
  1: ["P2", "P2", "P3", "P4"],
  2: ["4", "S1P", "P1", "S1P"],
  3: ["S2L", "S1L", "P3", "4"],
  4: ["S1P", "P1", "S2P", "S2P"],
  5: ["S1L", "S2L", "S4L", "S3L"]
};

let stageNum = 1;
const stageNumOutput = document.getElementById('stageNumOutput');
stageNumOutput.innerText = `Stage: ${stageNum}`;

const submit = () => {
  const stageInput = document.getElementById('stageInput');
  const response = document.getElementById('response');
  const input = stageInput.value;
  const bigNum = parseInt(input[4]) - 1;
  const smallNum = input.slice(0,4);
  const press = display[stageNum][bigNum];

  if (press === "4") {
    response.innerText = 'Press 4!';
    saves[stageNum] = `${smallNum.indexOf("4") + 1}4`;
  } else if (press[0] === "P") {
    const position = parseInt(press[1]) - 1;
    const labelOfPosition = smallNum[position];
    response.innerText = `Press ${labelOfPosition}!`;
    saves[stageNum] = `${position + 1}${labelOfPosition}`;
  } else if (press[0] === "S") {
    const pullInfoFromSaves = saves[parseInt(press[1])];
    if (press[2] === "P") {
      const position = parseInt(pullInfoFromSaves[0]);
      const labelBasedOnSavedPosition = smallNum[position - 1];
      response.innerText = `Press ${labelBasedOnSavedPosition}!`;
      saves[stageNum] = `${position}${labelBasedOnSavedPosition}`;
    } else if (press[2] === "L") {
      const label = pullInfoFromSaves[1];
      const position = smallNum.indexOf(label) + 1;
      response.innerText = `Press ${label}!`;
      saves[stageNum] = `${position}${label}`;
    }
  }
  if (stageNum == 5){
    stageNumOutput.innerText = `Done !`;
  }
  else
  {
    stageNum += 1;
    stageNumOutput.innerText = `Stage: ${stageNum}`;
  }
  console.log(saves);
};

const reset = () => {
  stageNum = 1;
  stageNumOutput.innerText = `Stage: ${stageNum}`;
  response.innerText = '';
  saves = {};
};