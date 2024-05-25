let instructions = {
    3: getInstruction3Wires,
    4: getInstruction4Wires,
    5: getInstruction5Wires,
    6: getInstruction6Wires
};

document.getElementById('getInstruction').addEventListener('click', getInstruction);

function getInstruction() {
    const wires = document.getElementById('wires').value;
    const serialOdd = document.getElementById('serial').value.toLowerCase() === 'y';
    
    const wireColorCounts = countColors(wires);
    const wireCount = wires.length;

    if (instructions[wireCount]) {
        const instruction = instructions[wireCount](wireColorCounts, serialOdd, wires);
        document.getElementById('instruction').textContent = instruction;
    } else {
        document.getElementById('instruction').textContent = 'Invalid wire count';
    }
}

function countColors(wires) {
    const counts = {r: 0, b: 0, y: 0, w: 0, p: 0};
    for (const wire of wires) {
        if (counts.hasOwnProperty(wire)) {
            counts[wire]++;
        }
    }
    return counts;
}

function getInstruction3Wires(colors, serialOdd, wires) {
    if (colors.r === 0) {
        return "Cut 2nd";
    } else if (colors.b > 1) {
        const position = wires.indexOf("b", wires.indexOf("b") + 1) + 1;
        return `Cut ${position}nd`;
    } else {
        return "Cut Last";
    }
}

function getInstruction4Wires(colors, serialOdd, wires) {
    if (colors.r > 1 && serialOdd) {
        const position = wires.length - wires.lastIndexOf("r");
        return `Cut ${position}nd`;
    } else if (colors.r === 0 && wires.includes("y")) {
        return "Cut First";
    } else if (colors.b === 1) {
        return "Cut First";
    } else if (colors.y > 2) {
        return "Cut Last";
    } else {
        return "Cut 2nd";
    }
}

function getInstruction5Wires(colors, serialOdd, wires) {
    if (wires.includes("p") && serialOdd) {
        return "Cut 4th";
    } else if (colors.r === 1 && colors.y >= 1) {
        return "Cut First";
    } else if (colors.p === 0) {
        return "Cut 2nd";
    } else {
        return "Cut First";
    }
}

function getInstruction6Wires(colors, serialOdd, wires) {
    if (colors.y === 0 && serialOdd) {
        return "Cut 3rd";
    } else if (colors.y === 1 && colors.w > 1) {
        return "Cut 4th";
    } else if (colors.r === 0) {
        return "Cut Last";
    } else {
        return "Cut 4th";
    }
}
