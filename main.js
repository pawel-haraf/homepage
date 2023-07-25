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
