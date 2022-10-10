process.stdin.resume();
process.stdin.setEncoding("utf-8");
let stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
    let len = stdin_input.length
    let zCount = 0
    let oCount = 0

    for (let i = 0; i < len; i++) {
        if (stdin_input.charAt(i) == 'z') zCount++;
        if (stdin_input.charAt(i) == 'o') oCount++;
    }

    // formula => 2xX=Y
    let x = 2 * zCount
    let y = oCount
    if (x == y) process.stdout.write("Yes");
    else process.stdout.write("No");


    // process.stdout.write("Yes"); 
    // process.stdout.write("z="+zCount+", o="+oCount); 
    // process.stdout.write(" "+x+","+y); 
});

// NOTE : Worked and accepted, problem in stden "end" in vs code
