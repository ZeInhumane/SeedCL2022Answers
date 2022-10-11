function solve(s) {
    let unique = Array.from(new Set([...s]))
    let object = {};
    for (let i = 0; i < unique.length; i++) {
        object[unique[i]] = i.toString();
    }
    ans = []
    for (let i = 0; i < s.length; i++) {
        ans.push(object[s[i]]);
    }
    console.log(ans.join(" "))
}

function processData(input) {
    // We take care of reading the input for you :)
    input = input.replaceAll('\r', '')
    let s = input.split("\n")[0];
    solve(s)
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