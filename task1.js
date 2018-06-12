/* Task 1 */

/* Put your code here */
const argumentList = process.argv;
const numbers = argumentList.slice(2,argumentList.length);

if (numbers.length === 2) {
	let n = Number(numbers[0]);
	let e = Number(numbers[1]); 
	printSumOfPowers(n, e);
}

function printSumOfPowers(n, e) {
	if (e <= 100 && e >=1 && n>=1 && n<=100) {
		var sum = 1;
		for (var i = 2; i <= n; i++) {
			var power = 1;
			for(var j = 1; j <= e;j++) {
				power *= i;
			}
			sum += power;
		}	
		process.stdout.write(`${sum}`);
	} 
}