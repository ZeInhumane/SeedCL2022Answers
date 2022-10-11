function tanjiroJump(num) {
    let maximum = 0;
    for (let i = 0; i < num.length; i++) {
        if (i > maximum) return false;
        maximum = Math.max(maximum, i + num[i]);
    }
    return true
};

function solve(n, num) {
    console.log(tanjiroJump(num));
}

function processData(input) {
    let arr = input.split('\n');
    let n = parseInt(arr[0]);
    let num = arr[1].split(' ').map(ele => parseInt(ele));
    solve(n, num);
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