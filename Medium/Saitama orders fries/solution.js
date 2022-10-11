function solve(n, fry) {
    let even = fry.filter(ele => ele % 2 == 0)
    let odd = fry.filter(ele => ele % 2 == 1)
    const comp = (a, b) => {
        return a - b;
    }
    even.sort(comp)
    odd.sort(comp)
    let final = odd.concat(even)
    let ans = "EAT";
    for (let i = 0; i < n; i++) {
        if (final[i] != fry[i]) {
            ans = "NO EAT";
        }
    }
    console.log(ans)
}

function processData(input) {
    let arr = input.split("\n");
    let n = parseInt(arr[0]);
    let fry = arr[1].split(" ").map(ele => parseInt(ele));
    solve(n, fry);
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