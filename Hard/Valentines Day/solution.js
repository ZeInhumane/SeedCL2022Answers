function solve(a, b, d) {
    /*
        Write your solution in this function and console.log your answer
    */
    if (Math.ceil(Math.abs(a - b) / d) <= Math.min(a, b) ) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}

function processData(input) {
    // We take care of reading the input for you :)
    input = input.replaceAll('\r', '')
    let arr = input.split("\n");
    let [a, b, d] = arr[0].split(" ").map(num => parseInt(num))
    solve(a, b, d);
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
