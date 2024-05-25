const display = {
    "":"Bottom Left",
    "blank": "Middle Right",
    "c":"Top Right",
    "cee":"Bottom Right",
    "display":"Bottom Right",
    "first":"Top Right",
    "hold on":"Lead",
    "lead":"Bottom Right",
    "led":"Middle Left",
    "leed":"Bottom Left",
    "no":"Bottom Right",
    "nothing":"Middle Left",
    "okay":"Top Right",
    "read":"Middle Right",
    "red":"Middle Right",
    "reed":"Bottom Left",
    "says":"Bottom Right",
    "see":"Bottom Right",
    "their":"Middle Right",
    "there":"Bottom Right",
    "they are":"Middle Left",
    "they're":"Bottom Left",
    "ur":"Top Left",
    "yes":"Middle Left",
    "you":"Middle Right",
    "you are":"Bottom Right",
    "your":"Middle Right",
    "you're":"Middle Right"
}

const responseSelection = {
    "blank": "WAIT, RIGHT, OKAY, MIDDLE, BLANK",
    "done": "SURE, UH HUH, NEXT, WHAT?, YOUR, UR, YOU'RE, HOLD, LIKE",
    "first": "LEFT, OKAY, YES, MIDDLE, NO, RIGHT, NOTHING, UHHH, WAIT",
    "hold": "YOU ARE, U, DONE, UH UH, YOU, UR, SURE, WHAT?, YOU'RE",
    "left": "RIGHT, LEFT",
    "like": "YOU'RE, NEXT, U, UR, HOLD, DONE, UH UH, WHAT?, UH HUH",
    "middle": "BLANK, READY, OKAY, WHAT, NOTHING, PRESS, NO, WAIT, LEFT",
    "next": "WHAT?, UH HUH, UH UH, YOUR, HOLD, SURE, NEXT",
    "no": "BLANK, UHHH, WAIT, FIRST, WHAT, READY, RIGHT, YES, NOTHING",
    "nothing": "UHHH, RIGHT, OKAY, MIDDLE, YES, BLANK, NO, PRESS, LEFT",
    "okay": "MIDDLE, NO, FIRST, YES, UHHH, NOTHING, WAIT, OKAY",
    "press": "RIGHT, MIDDLE, YES, READY, PRESS",
    "ready": "YES, OKAY, WHAT, MIDDLE, LEFT, PRESS, RIGHT, BLANK, READY",
    "right": "YES, NOTHING, READY, PRESS, NO, WAIT, WHAT, RIGHT",
    "sure": "YOU ARE, DONE, LIKE, YOU'RE, YOU, HOLD, UH HUH, HR, SURE",
    "u": "UH HUH, SURE, NEXT, WHAT?, YOU'RE, UR, UH HUH, DONE, U",
    "uhhh": "READY, NOTHING, LEFT, WHAT, OKAY, YES, RIGHT, NO, PRESS",
    "uh huh": "UH HUH",
    "uh uh": "UR, U, YOU ARE, YOU'RE, NEXT, UH UH",
    "ur": "DONE, U, UR",
    "wait": "UHHH, NO, BLANK, OKAY, YES, LEFT, FIRST, PRESS, WHAT",
    "what": "UHHH, WHAT",
    "what?": "YOU, HOLD, YOU'RE, YOUR, U, DONE, UH UH, LIKE, YOU ARE",
    "yes": "OKAY, RIGHT, UHHH, MIDDLE, FIRST, WHAT, PRESS, READY, NOTHING",
    "you": "SURE, YOU ARE, YOUR, YOU'RE, NEXT, UH HUH, UR, HOLD, WHAT?",
    "you're": "YOU, YOU'RE",
    "you are": "YOUR, NEXT, LIKE, UH HUH, WHAT?, DONE, UH UH, HOLD, YOU",
    "your": "UH UH, YOU ARE, UH HUH, YOUR"
  };

  const bigWord = () => {
    const displayWordAsk = document.getElementById('display');
    const displayResponse = document.getElementById('displayResponse');
    const displayWord = displayWordAsk.value;
    displayResponse.innerText = display[displayWord];
    
  }
  const run = () => {
    const responseWordAsk = document.getElementById('responseWord');
    const wordSelectionResponse = document.getElementById('wordSelectionResponse');
    const responseWord = responseWordAsk.value;
    wordSelectionResponse.innerText = responseSelection[responseWord];

  }