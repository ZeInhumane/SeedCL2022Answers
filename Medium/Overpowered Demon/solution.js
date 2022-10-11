function solve(n) {
    /*
        Write your solution in the function
    */
    console.log(Math.ceil(Math.log(n) / Math.log(2)) + 1)
}

function processData(input) {
    // We read the input for you :)
    input = input.replaceAll('\r', '').replaceAll('\n', '');
    let n = parseInt(input)
    solve(n);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});