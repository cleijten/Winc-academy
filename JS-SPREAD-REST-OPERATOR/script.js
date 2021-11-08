function optellenArguments(...numbers) {
    return numbers.reduce(function (prev, current) {
        return prev + current;
    });
}

console.log(optellenArguments(1, 4, 6, 3, 10));


function optellenArray(...getallen) {
    return getallen.reduce(function (prev, current) {
        return prev + current;
    });
}

let getallen = [1, 2, 13, 4];

console.log(optellenArray(...getallen));


