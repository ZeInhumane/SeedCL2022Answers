function solve(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "i") {
            count++;
        }
    }
    console.log(count)
}

function processData(input) {
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