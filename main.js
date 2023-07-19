const firstName = 'Paweł Haraf';
const age = 37;

console.log(`Cześć :) Nazywam się ${firstName} i mam ${age} lat`);

// moduł 3 DOMowe przedszkole
const header = document.querySelector('.page-header__heading--js');
console.log(header);
console.log(header.innerHTML);
header.innerHTML = `Cześć :) Nazywam się ${firstName} i mam ${age} lat. To jest tekst nagłówka zmienionego poprzez JS:`;
console.log(header.style);
header.style.color = 'red'