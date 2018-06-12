/* Task 1 */

/* Put your code here */
const argumentList = process.argv;

let n = Number(argumentList[2]);
let e = Number(argumentList[3]); 

if (e <= 100 && e >=1 && n>=1 && n<=100) {
	var sum = 1;
	var j = 1;
	for (var i = 2; i<=n; i++) {
		var q = 1;
		while (j<=e) {
			q *= i;
			j++;
		}
		sum += q;			
	}

	
	process.stdout.write(`${sum}`);
} 
