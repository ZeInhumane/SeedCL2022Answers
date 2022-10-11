function solve(n, num) {
    let dp = new Array(num.length).fill(0);
    dp[0] = 1
    for (let i = 0; i < num.length; i++) {
        if (dp[i]) {
            for (let j = 0; j <= num[i]; j++) {
                if (i + j >= num.length) break
                dp[i + j] = 1;
            }
        }
    }
    console.log(dp[num.length - 1] == 1)
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