function readInput(input) {
    return input
        .replace(/, /g, ",") // remove gaps in coordinates
        .replace(/[()]/g, "") // remove parantheses
        .split(" "); // extract values
}

function getGrid(input) {
    let data = readInput(input);

    let gridCoordinates = data[0].split("x");

    return {
        x: parseInt(gridCoordinates[0]),
        y: parseInt(gridCoordinates[1]),
    };
}

function getCoordinates(input) {
    let data = readInput(input);

    data.shift(); // remove the grid definition

    // convert array coordinates into object ones
    let coordinates = data.map((item) => {
        let values = item.split(",");
        return { x: parseInt(values[0]), y: parseInt(values[1]) };
    });

    // add starting point
    return [{ x: 0, y: 0 }, ...coordinates];
}

// returns the whole delivery command (string)
function deliver(input) {
    let grid = getGrid(input);
    let coordinates = getCoordinates(input);

    let command = "";

    for (let i = 0; i < coordinates.length; i++) {
        let current = coordinates[i];
        let next = coordinates[i + 1];

        if (current && next) {
            let isValidCoordinate = next.x >= 0 && next.x <= grid.x && next.y >= 0 && next.y <= grid.y;

            if (isValidCoordinate) {
                command += moveAndDrop(current, next);
            } else {
                // remove out of bounds coordinates
                coordinates.splice(i, 1);
            }
        }
    }
    return command;
}

// returns a single move command (string), ex. EEEN
function moveAndDrop(a, b) {
    let string = "";

    let horizontal = b.x - a.x;
    let vertical = b.y - a.y;

    if (horizontal > 0) {
        string += steps("E", horizontal);
    } else if (horizontal < 0) {
        string += steps("W", Math.abs(horizontal));
    }

    if (vertical > 0) {
        string += steps("N", vertical);
    } else if (vertical < 0) {
        string += steps("S", Math.abs(vertical));
    }

    return `${string}D`;
}

// returns the steps taken ex. ("E", 3) = EEE
function steps(letter, times) {
    let string = "";
    for (let i = 0; i < times; i++) {
        string += letter;
    }
    return string;
}

module.exports = {
    readInput,
    getGrid,
    getCoordinates,
    deliver,
    moveAndDrop,
    steps,
};
