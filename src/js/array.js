const hardware = ['mouse', 'keyboard', 'screen']
console.log(hardware)

const tekst = 'co ten frontend'

const textLegth = tekst.length

const myObject = {
	name: 'Paweł',
	age: '37',
}

hardware.push(myObject)
console.log(hardware.indexOf(myObject))
console.log(hardware)
hardware.unshift('test')
console.log(hardware)
hardware.shift()
console.log(hardware)
hardware.pop()

console.log(hardware[2])
console.log(hardware.length)
console.log(tekst[3])
console.log(tekst[textLegth - 1])
console.log(hardware)
console.log(tekst.indexOf('fr'))

if (tekst.indexOf('Paweł') >= 0) {
	console.log('Paweł znaleziony')
} else {
	console.log('Paweł nie znaleziony')
}

hardware.splice(0, 1)

console.log(hardware)

const newHardware = hardware.slice(0, 1)

console.log(newHardware)
console.log(tekst.slice(3, 8))
