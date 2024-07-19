// find primary number
function isPrime(n: number): boolean {
	if (n <= 1) return false

	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			return false
		}
	}

	return true
}

// find perfect number that sum of factors equal that number
// by giving number that need to know
function findPerfectNumbers(count: number): number[] {
	const perfectNumbers: number[] = []
	//  init 2 value for loop
	let p = 2
	// gattering value till equal count
	while (perfectNumbers.length < count) {
		// check that given value is prime number and that number power with 2 then - 1 still prime
		if (isPrime(p) && isPrime(Math.pow(2, p) - 1)) {
			// use formular for cal result
			const perfectNumber = Math.pow(2, p - 1) * (Math.pow(2, p) - 1)
			// collect to array that is return
			perfectNumbers.push(perfectNumber)
		}
		p++
	}
	return perfectNumbers
}

console.log('The first 5 perfect numbers are: ', findPerfectNumbers(5))
// these are [ 6, 28, 496, 8128, 33550336 ]
