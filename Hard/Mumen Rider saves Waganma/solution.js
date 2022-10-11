function solve(size) {
	function isPrimeFunc(num) {
		for (var i = 2; i <= num ** 0.5; i++) {
			if (num % i == 0) {
				return false
			}
		}
		return true
	}

	var matrix = new Array(size)

	for (var i = 0; i < matrix.length; i++) {matrix[i] = new Array(size)};

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix.length; j++) {
			matrix[i][j] = '-1'
		}
	}

	var x = (size / 2 >> 0)
	var y = (size / 2 >> 0)

	matrix[y][x] = " "
	let dx = [0, -1, 0, 1]
	let dy = [1, 0, -1, 0]
	let dir = 0;
	let count = 1;

	while (count < size ** 2) {
		count++;
		x += dx[dir]
		y += dy[dir]
		matrix[y][x] = ' '
		if (isPrimeFunc(count)) {
			matrix[y][x] = 'o'
		}
		if (matrix[y + dy[(dir + 1) % 4]][x + dx[(dir + 1) % 4]] == -1) {
			dir = (dir + 1) % 4
		}
	}

	console.log("-" + "-".repeat(size) + "-")
	for (row of matrix) {
		console.log("|" + row.join("") + "|")
	}
	console.log("-" + "-".repeat(size) + "-")
}
function processData(input) {
  	// We take care of reading the input for you :)
    let n = parseInt(input.split("\n")[0]);
    solve(n)
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