({
  plugins: ['jsdom-quokka-plugin'],
  jsdom: {html: `<div id="test">Hello</div>`}
})
//Deklarujemy zmienne
const name = "Paweł";
const age = 32;

//Wywołujemy zmienne za pomocą funkcji console.log w teminalu
console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lat`);

console.log("Siema!");

// Podpinawy zawarość .main__header--js pod zmienną heading w kodzie JS
const heading = document.querySelector(".main__header--js");

console.log(heading);

// console.log(heading.innerHTML);

// Podmieniamy zawartość .main__header--js na inny tekst
heading.innerHTML = "Witaj świecie pisze do Ciebie za pośrednictwem javaScript";

console.log(heading.innerHTML);

//Zadanie domowe z tygodnia IV :)
const description = document.querySelector(".main__description--js");

console.log(description.innerHTML);

description.innerHTML = "JavaScript wygenerował ten paragraf";

console.log(description.innerHTML);

//Piszemy pierwszą funkcje

function calculate(myNumber) {
  console.log(`Dostałam ${myNumber}`);
  return myNumber * 7;
}

const myResult = calculate(1);
console.log(myResult);

// Funkcja powitalna
function greet(age, name) {
  console.log(
    `Witaj Drogi Odwiedzający, nazywam się ${name} i mam ${age} lata`
  );
}

greet(18, "Paweł");

//Funkcja zmieniająca zawartość wybranego elementu w HTML'u
function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

const paragraph = ".main__description--js2";
const content = "JavaScript uzupełanił treść w tym paragrafie";

createContent(paragraph, content);

//(Fat) arrow function =>
const helloFunction = (age, firstName) => {
  console.log(`Cześć, jestem ${name} i mam ${age} lata`);
};

helloFunction(age, "Paweł");

// (Fat) arrow function - wersja skrócona
const calculate1 = (myNumber) => myNumber * 7;
const myResult1 = calculate1(age);
console.log(
  `Wynik funkcji calculate1 dla zmiennej age = ${age} to: ${myResult1}`
);

// JS Obiekty

const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed 💥`);
  },
  isOperating: true,
  levels: 357,
  name: "Death Star",
  population: 10000,
  isLightOn: true,
  commander: {
    name: "Darth Vader",
    age: 44,
  },
};

console.log(deathStar);

// dot notation
console.log(deathStar.name);

console.log(deathStar.commander.name);

deathStar.fire("Rebel ship"); // Rebel ship destroyed 💥

//bracket notation
console.log(deathStar["name"]); // Death Star

console.log(deathStar[name]); // undefinded
const myProperty = "name";
console.log(deathStar[myProperty]); // Death Star

const showMeProperty = (myProperty) => {
  console.log(`Twoja własność ${myProperty} to: ${deathStar[myProperty]}`);
};

showMeProperty("levels");

const humanOne = {
  name: "Maciek",
  age: 32,
};

const humanTwo = {
  name: "Stefan",
  age: 32,
};

humanTwo.age = 35;

console.log(humanTwo.age); // 35

humanTwo.age = humanTwo.age;

console.log(humanOne); // {name: "Maciek", age: 32}
console.log(humanTwo); //{name: "Stefan", age: 32}

humanOne.age = 35;

console.log(humanOne); // {name: "Maciek", age: 35}
console.log(humanTwo); // {name: "Stefan", age: 32}

// JavaScript: Logika

if ("JavaScript" != "Java") {
  // wykonaj kod jeśli true
  console.log(`Java to nie JavaScript`);
}

if (humanOne.age > humanTwo.age) {
  console.log("Human one jest starszy");
}

if (humanOne.age === humanTwo.age) {
  console.log("Są równolatkami");
}

if (humanOne.age < humanTwo.age) {
  console.log("Human two jest starszy");
}
//Warunki logiczne

if (humanTwo.age === 35 && humanTwo.name) {
  console.log("To się wykona");
}

if (humanOne.age > humanTwo.age) {
  console.log("Human one jest starszy");
} else {
  console.log("Human two jest starszy lub są równolatkami");
}

if (humanOne.age > humanTwo.age) {
  console.log("Human one jest starszy");
} else if (humanOne.age === humanTwo) {
  console.log("Są równolatkami");
} else {
  console.log("Human two jest starszy");
}

const myVariable = 7;

switch (myVariable) {
  case 4:
    console.log("hi 4");
    break;
  case 8:
    console.log("hi 8");
    break;
  default:
    console.log("default response");
}

//Zapis skrócony // funkcja if i else

32 > 20 ? console.log("to prawda") : console.log("to nieprawda");

// JS: Eventy

const button = document.querySelector(".action--js");

console.log(button);

const myClik = () => {
  const heading = document.querySelector(".main__header--js");
  heading.innerHTML =
    "Nagłówek zmieniony za pomocą JavaScript po naciśnięciu buttona";
  heading.classList.toggle('klasa-z-js');
};

button.addEventListener("click", myClik);

