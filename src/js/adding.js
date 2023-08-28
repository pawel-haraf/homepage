// homework 09 week
const numbers = [1, 2, 3, 4, 5]

const sum = numbers => {
	let total = 0

	for (let partNumber of numbers) {
		total = total + partNumber
	}
	return total
}

console.log(sum(numbers))
