function runProgram(input) {
    var input1 = Number(input);

    for (var i = 1; i <= input1; i++) {
        var result = "";
        for (var j = 1; j <= input1; j++) {
            result += i * j + " "
        }
        console.log(result);
    }
}
if (process.env.USERNAME === "shiva") {
    runProgram(`6`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}



