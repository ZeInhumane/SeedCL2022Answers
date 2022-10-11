function solve(d, n, health) {
	let slashes = 0;
	for (let i = 0; i < n; i++) {
		slashes += Math.ceil(health[i] / d);
	}

	console.log(slashes)
}

function processData(input) {
    input = input.replaceAll('\r', '')
	let arr = input.split("\n");
	let d = parseInt(arr[0]);
	let n = parseInt(arr[1]);
	let health = arr[2].split(" ").map(ele => parseInt(ele));
	solve(d, n, health);
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
