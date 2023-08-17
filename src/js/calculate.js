function calculate(myNumber) {
	return myNumber * 7
}

function calculate1(myNumber) {
	myNumber = myNumber + 3
	console.log(myNumber)
	return myNumber * 7
}

const result = calculate1(2)
console.log(result)

function sayHello() {
	console.log('hello')
}

// (fat) arrow funtion
const calculate2 = myNumber => {
	myNumber = myNumber + 3
	console.log(myNumber)
	return myNumber * 7
}

const calculate3 = myNumber => (myNumber + 4) * 7

export const myFavouriteColor = 'hotpink'

export { calculate, calculate1, calculate2, calculate3, sayHello }

const tax = '23%'

export default tax

