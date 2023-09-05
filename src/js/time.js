console.log('goni nas czas')

setTimeout(() => {
	console.log('czas minął')
}, 5000)

console.log('czas dalej goni')

const myInteval = setInterval(() => {
	console.log('tik-tak')
}, 1000)

setTimeout(() => {
	clearTimeout(myInteval)
}, 5000)
