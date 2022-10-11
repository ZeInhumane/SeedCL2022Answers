function solve(n) {
    /*
        Write your solution in the function
    */
    var no_days = 0
    var printer_list = new Array(1).fill(0)

    function statueCheckFunc(n, arr) {
        for (var e of arr) {
            if (e >= n) {
                return false
            }
        }
        return true
    }

    var done = false

    while (!done) {
        for (var printer_index = 0; printer_index < printer_list.length; printer_index++) {
            printer_list[printer_index] += (printer_index + 1)
            if (printer_list[printer_index] >= n) {
                done = true
                break
            }
        }
        if (done) {continue}
        printer_increase_num = printer_list.length
        printer_list = printer_list.concat(new Array(printer_increase_num).fill(0))
        for (var printer_index = 1; printer_index < printer_increase_num; printer_index++) {
            printer_list[printer_increase_num + printer_index - 1] += (printer_increase_num - printer_index)
        }

        no_days += 1
    }

    console.log(no_days + 1)
}

function processData(input) {
    // We read the input for you :)
    input = input.replaceAll('\r', '').replaceAll('\n', '');
    let n = parseInt(input)
    solve(n);
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
