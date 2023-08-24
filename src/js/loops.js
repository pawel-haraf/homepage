// WTF 09.04 - pętle
// pętla for
for (let i = 0; i < 3; i++) {
	console.log(`${i} wykonanie pętli`)
}

let number = 0

console.log(number++)
console.log(number)

//  Wypiszmy elementy tablicy

const elements = ['😎', '🤯', '😱']

for (let i = 0; i < elements.length; i++) {
	console.log(`na miejscu ${i} jest ${elements[i]}`)
}

// pętla while

let n = 3
while (n < 9) {
	console.log(n)
	n = n + 3
}
console.log(n)

// pętla do while

let m = 2
do {
	console.log(m)
	m = m + 2
} while (m < 9)
console.log(m)

// for in
const deathStar = {
	diameter: 120000,
	fire: target => {
		console.log(`${target} destroyed 💣`)
	},
	isOperating: true,
	levels: 357,
	name: 'Death Star',
	population: 10000,
	comander: {
		name: 'darth vader',
	},
}

for (property in deathStar) {
	console.log(property)
	console.log(`${property}: ${deathStar[property]}`)
}

for (let element of elements) {
	console.log(element)
}

let myNumber = 13

const myFunction = a => {
	const b = a * 3
	const c = b * 7
	return b + c
}

for (let i = 0; i < elements.length; i++) {
	myNumber = myNumber * (i + 1)
	myFunction(i)
}
