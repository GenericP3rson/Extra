const has4 = (int) => {
    for (let i = 0; i < int.toString(); ++i) {
        if (int.toString()[i] == "4") {
            return true;
        }
    }
    return false;
};
const go = (num) => {
    let x = has4(num), y = num, z = 0;
    while (x) {
        --y;
        ++z;
        x = has4(y) && has4(z);
    }
    return [y, z];
};

const cin = process.stdin;

// Set input character encoding.
cin.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Please input text in command line.");

// When user input data and click enter key.
cin.on('data', function (data) {
    if (data === 'exit\n') {
        process.exit();
    } else {
        console.log(go(Number(data)));
        process.exit();
    }
});