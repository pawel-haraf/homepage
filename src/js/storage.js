console.log('hello storage')

document.cookie = 'ciasto = mniammniam'
document.cookie = 'drugie = ok'
document.cookie = 'trzecie = no nieźle'

const myObject2 = {
	name: 'Paweł',
	age: 37,
}

localStorage.setItem('name', JSON.stringify(myObject2))

const fromStorage = JSON.parse(localStorage.getItem('name'))

console.log(fromStorage)
