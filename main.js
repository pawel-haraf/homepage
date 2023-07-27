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
function calculate(myNumber) {
	return myNumber * 7
}

console.log(calculate(2))

function calculate1(myNumber) {
	myNumber = myNumber + 3
	console.log(myNumber)
	return myNumber * 7
}

calculate1(1)

const result = calculate1(2)
console.log(result)


function hello() {
    console.log('hello')
}

hello();

// (fat) arrow funtion
const calculate2 = (myNumber) => { 
    myNumber = myNumber +3
    console.log(myNumber)
    return myNumber*7
}

calculate2(1)

const calculate3 = myNumber => (myNumber+4)*7
console.log(calculate3(2))

// 05.07 javaScript: obiekt
const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed 💣`)
    },
    isOperating: true,
    levels: 357,
    name:'Death Star',
    population: 10000,
    comander: {
        name: 'darth vader'
    }
}

console.log(deathStar)

console.log(deathStar.name)

deathStar.fire('alderan')
deathStar.fire('scarif')

console.log(deathStar['levels'])

console.log(deathStar.comander.name)