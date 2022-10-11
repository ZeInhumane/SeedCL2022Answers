function solve(n, height) {
	height.sort((a, b) => {
		return a - b;
	})

	let ans = true;
	for (let i = 0; i < n / 2; i++) {
		ans &= height[i] < height[i + n / 2];
	}
	console.log(ans ? "yes" : "no")
}

function processData(input) {
	let arr = input.split("\n");
	let n = parseInt(arr[0]);
	let height = arr[1].split(" ").map(ele => parseInt(ele));
	solve(n, height);
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
