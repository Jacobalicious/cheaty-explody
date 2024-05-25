const yesSerial = {
    "0": { "r": "b", "b": "r", "g": "y", "y": "g" },
    "1": { "r": "y", "b": "g", "g": "b", "y": "r" },
    "2": { "r": "g", "b": "r", "g": "y", "y": "b" },
  };
  
  const noSerial = {
    "0": { "r": "b", "b": "y", "g": "g", "y": "r" },
    "1": { "r": "r", "b": "b", "g": "y", "y": "g" },
    "2": { "r": "y", "b": "g", "g": "b", "y": "r" },
  };
  
  const getOutputSequence = (serialData, strikes, simon) => {
    const output = [];
    for (const item of simon) {
      const { [item]: output_item } = serialData[strikes];
      output.push(output_item);
    }
    return output;
  };
  
  const run = () => {
    const serialAsk = document.getElementById('serial');
    const strikesAsk = document.getElementById('strikes');
    const simonAsk = document.getElementById('simon');
    const serial = serialAsk.value;
    const strikes = strikesAsk.value;
    const simon = simonAsk.value;
    const response = document.getElementById('response');
  
    let press = [];
  
    if (serial === "y") {
      press = getOutputSequence(yesSerial, strikes, simon);
    } else if (serial === "n") {
      press = getOutputSequence(noSerial, strikes, simon);
    } else {
      press = `Only do y or n for serial`;
    }
  
    response.innerText = `Push: ${press}`;
  };