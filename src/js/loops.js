// JS: pętle
for (let i = 0; i < 3; i++) {
    console.log(`siema`);
    console.log(`${i} wykonanie pętli`);
}

let myNumber = 3;
console.log(myNumber++);
console.log(myNumber);

console.log(myNumber--);
console.log(myNumber);

// Zmiana watości stałej myNumber (dla postinkrementacji i postdekrementacji) następuje dopiero w następnym kroku.
// Dzieje się tak dlatego, ponieważ wartość zwiększana jest dopiero po wykonaniu instrukcji (równania).

// Preinkrementacja i predekrementacja

console.log(++myNumber);
console.log(myNumber);
// Zwiększamy wartość stałej przed wykonaniem operacji.
console.log(--myNumber);
console.log(myNumber);

// Wypiszmy elementy tablicy

const myArray = ['🎯', '🥁', '🚋'];

for (let i = 0; i < myArray.length; i++) {
    console.log(`Pod indeksem ${i} jest element ${myArray[i]}`);
}

// pętla while

let myNumber1 = 0;
while (myNumber1 < 10) {
    console.log(myNumber1);
    myNumber1++;
}

const maciek = {
    name: 'maciek',
    age: '32',
}

for (let myProperty in  maciek){
    console.log(myProperty);
}

for (let element of myArray) {
    console.log(element);
}