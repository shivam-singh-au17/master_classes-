function runProgram(input) {
    var input1 = Number(input);
    var sum = 0;
    for (var i = 0; i <= input1; i++){
        if (i % 2 == 1) {
            sum = sum + i
        }
    }
    console.log(sum);

}
if (process.env.USERNAME === "shiva") {
    runProgram(`7`);
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