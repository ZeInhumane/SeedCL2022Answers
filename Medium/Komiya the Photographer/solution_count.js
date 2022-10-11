function solve(n, height) {
	let count = {}

	for (let i = 0; i < height.length; i++) {
		count[height[i]] = count[height[i]] || 0
		count[height[i]]++;
	}

	console.log(Math.max(...Object.values(count)) > n / 2 ? 'no' : 'yes')
}

function processData(input) {
    // We take care of reading the input for you :)
	input = input.replaceAll('\r', '')
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

