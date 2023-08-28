const { fr } = require('date-fns/locale')

// 10.02 Destrukturyzacja i operator spread
console.log('destrukturyzacja + spread operator')

const person = {
	name: 'Pawel',
	age: '37',
}

console.log(person.name)
console.log(person.age)

const { name, age } = person

console.log(name)
console.log(age)

const fruits = ['apple', 'orange', 'strawberry']
const vegetables = ['carrot', 'beetroot', 'tomato']

const [firstFruit, , thirdFruit] = fruits

console.log(firstFruit)
console.log(thirdFruit)

// spread

const address = {
	city: 'Jaworzno',
	contry: 'Poland',
}

const personWithAddress = {
	name: person.name,
	city: address.city,
}

console.log(personWithAddress)

const personWithAddress1 = {
	...person,
	...address,
}

console.log(personWithAddress1)

const fruitsAndVegs = [...fruits, ...vegetables, 'pizza']
console.log(fruitsAndVegs)

const newFruits = fruits

console.log(fruits)
console.log(newFruits)

newFruits.push('banana')
console.log(fruits)
console.log(newFruits)

const newFruits1 = [...fruits]

console.log(fruits)
console.log(newFruits1)

newFruits.push('banana')
console.log(fruits)
console.log(newFruits1)
