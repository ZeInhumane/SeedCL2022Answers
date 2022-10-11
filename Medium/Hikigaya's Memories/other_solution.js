function solve(s) {
    /*
    	Write your solution in this function
    */
    let cur = 1;
    let assign = {};
    for (let i = 0; i < s.length; i++) {
        if (!assign[s[i]]) {
            assign[s[i]] = cur;
            cur++;
        }
    }
    let ans = [];
    for (let i = 0; i < s.length; i++) {
        ans.push(assign[s[i]] - 1);
    }
    console.log(ans.join(' '))
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