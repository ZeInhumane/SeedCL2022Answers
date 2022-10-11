function solve(s) {
    s = s.split(" ").map(ele => [...ele].reverse().join("")).join(" ")
    console.log(s)
}

function processData(input) {
    input = input.replaceAll('\r', '')
    let arr = input.split("\n");
    let s = arr[0];
    s = s.replaceAll('\r', '')
    solve(s);
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