import { calculate, calculate1, calculate2, calculate3, sayHello, myFavouriteColor } from './calculate.js'
import podatek from './calculate.js'
import * as nowaNazwa from './calculate.js'
import differenceInDays from 'date-fns/differenceInDays'
import substract from './substract.js'

const firstName = 'Paweł Haraf'
const age = 37

console.log(`Cześć :) Nazywam się ${firstName} i mam ${age} lat`)

// moduł 3 DOMowe przedszkole
const header = document.querySelector('.page-header__heading--js')
console.log(header)
console.log(header.innerHTML)
header.innerHTML = `Cześć :) Nazywam się <span class="special">${firstName}</span> i mam ${age} lat. To jest tekst nagłówka zmienionego poprzez JS:`
console.log(header.style)
header.style.color = 'red'

// zadanie domowe z trzeciego tygodnia
const content = document.querySelector('.article__content--js')
console.log(content)
content.innerHTML = `Zawartość paragrafu była pusta. Została uzupełniona poprzez javaScript. Jest to możliwe dzięki temu, że JS ma dostęp do różnych elementów w HTMLu czy CSSie poprzez DOM. Dzięki temu strony mogą być bardziej interaktywne.`

// 05.06 javaScript: funkcje
// function calculate(myNumber) {
// 	return myNumber * 7
// }

console.log(calculate(2))

// function calculate1(myNumber) {
// 	myNumber = myNumber + 3
// 	console.log(myNumber)
// 	return myNumber * 7
// }

calculate1(1)

// const result = calculate1(2)
// console.log(result)

// function sayHello() {
// 	console.log('hello')
// }

sayHello()

// (fat) arrow funtion
// const calculate2 = myNumber => {
// 	myNumber = myNumber + 3
// 	console.log(myNumber)
// 	return myNumber * 7
// }

calculate2(1)

// const calculate3 = myNumber => (myNumber + 4) * 7
console.log(calculate3(2))

// 05.07 javaScript: obiekt
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

console.log(deathStar)

console.log(deathStar.name)

deathStar.fire('alderan')
deathStar.fire('scarif')

console.log(deathStar['levels'])

console.log(deathStar.comander.name)

// 05.08 JS: Immutability w obiektach

const humanOne = {
	name: 'Maciek',
	age: 32,
	address: {
		street: 'Warszawska',
		city: 'Białystok',
	},
}

const humanTwo = {
	name: 'Paweł',
	age: 32,
	address: humanOne.address,
}

console.log(humanOne)
console.log(humanTwo)

humanTwo.age = 35
humanOne.address.street = 'Lipowa'

console.log(humanOne)
console.log(humanTwo)

const humanThree = humanOne

console.log(humanOne)
console.log(humanThree)

humanThree.age = 35

console.log(humanOne)
console.log(humanThree)

// zadanie domowe z tygodnia V

function hello(age, firstName) {
	console.log(`Witam Was wszystkich na mojej stronie. Nazywam się ${firstName} i mam ${age} lat.`)
}

hello(age, firstName)

// 06.02 Logika w JS

let myNumber1

if (myNumber1 === 4) {
	console.log('my number to 4')
} else if (myNumber1 === 8) {
	console.log('my number to 8')
} else {
	console.log('nie wiem ile wynosi my number')
}

switch (myNumber1) {
	case 4:
		console.log('my number to 4')
		break
	case 8:
		console.log('my number to 8')
		break
	default:
		console.log('nie wiem ile wynosisz')
}

myNumber1 > 4 ? console.log('większe niż 4') : console.log('mniejsze lub równe od 4')

// 06.12 eventy - click

const button = document.querySelector('.page-header__button--js')

button.addEventListener('click', e => {
	console.log('click, click')
	const header = document.querySelector('.page-header__heading--js')
	header.innerHTML = 'Zmieniony tekst nagłówka przez javaScript!!!'
	document.documentElement.style.setProperty('--backgroundColor', 'tomato')
})

// 06.13 🍔 menu

const hamburger = document.querySelector('.hamburger--js')

hamburger.addEventListener('click', () => {
	console.log('🍔')
	const navigation = document.querySelector('.navigation--js')
	navigation.classList.toggle('navigation--open')
})

// 08.03 javaScript: import/export

console.log(myFavouriteColor)
console.log(podatek)
console.log(nowaNazwa)
console.log(nowaNazwa.calculate(2))
console.log(nowaNazwa.myFavouriteColor)

// 08.04 javaScript: import/export modułów

const resultDays = differenceInDays(new Date(2024, 4, 19, 21, 0), new Date())

console.log(`Do moich urodzin pozostało ${resultDays} dni.`)

// 08.10 Zadanie domowe
console.log(substract(10, 5))
console.log(`Różnica między 10, a 5 to: ${substract(10, 5)}`)
