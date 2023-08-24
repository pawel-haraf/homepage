// WTF 09.06 JSON
const myObject1 = {
	name: 'Paweł',
	hi: () => {
		console.log('hi')
	},
	age: 37,
	hobby: ['frontend', 'music', 'gaming'],
}

console.log(myObject1)
myObject.hi
console.log(JSON.stringify(myObject1))
const myJSON = JSON.stringify(myObject1)
console.log(typeof myJSON)

const myParsedObject = JSON.parse(myJSON)

console.log(myParsedObject)
