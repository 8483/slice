const { readInput, getGrid, getCoordinates, moveAndDrop, steps, deliver } = require("./scripts");

test("5x5 (1, 3) (4, 4) converts into [ '5x5', '1,3', '4,4' ]", () => {
    let data = readInput("5x5 (1, 3) (4, 4)");

    expect(data[0]).toBe("5x5");
    expect(data[1]).toBe("1,3");
    expect(data[2]).toBe("4,4");
});

test("5x5 (1, 3) (4, 4) has the grid { x: 5, y: 5 }", () => {
    let data = getGrid("5x5 (1, 3) (4, 4)");

    expect(data.x).toBe(5);
    expect(data.y).toBe(5);
});

test("5x5 (1, 3) (4, 4) has the coordinates [ { x: 0, y: 0 }, { x: 1, y: 3 }, { x: 4, y: 4 } ]", () => {
    let data = getCoordinates("5x5 (1, 3) (4, 4)");

    expect(data[0].x).toBe(0);
    expect(data[0].y).toBe(0);
    expect(data[1].x).toBe(1);
    expect(data[1].y).toBe(3);
    expect(data[2].x).toBe(4);
    expect(data[2].y).toBe(4);
});

test("steps('E', 5) returns 'EEEEE'", () => {
    expect(steps("E", 5)).toBe("EEEEE");
});

test("Moving from { x: 1, y: 3 } to { x: 4, y: 4 }, and dropping returns EEEND", () => {
    let string = moveAndDrop({ x: 1, y: 3 }, { x: 4, y: 4 });

    expect(string).toBe("EEEND");
});

test("Input of '5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)' results in 'ENNNDEEEND'", () => {
    let string = deliver("5x5 (1, 3) (4, 4)");
    expect(string).toBe("ENNNDEEEND");
});

test("Input of '5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)' results in 'DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD'", () => {
    let string = deliver("5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)");
    expect(string).toBe("DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD");
});
