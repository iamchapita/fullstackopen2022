// Constante a la que no se le p uede cambiar el valor
const x = 1;
// Variable normal
let y = 5;

console.log(x, y);

y += 10;

console.log(x, y);

y = "Hola";

console.log(x, y);

// Arreglos

const t = [1, -1, 3];

t.push(5);

console.log("La longitu del arreglo es: ", t.length);

console.log("El elemento en 0 es: ", t[0]);

t.forEach((value) => {
	console.log(value);
});

// Método Concat

const t2 = t.concat(10);

console.log(t);
console.log(t2);

// Método Map

const m1 = t.map((value) => value * 2);
console.log(m1);

const m2 = t.map((value) => "<li>" + value + "</li>");

console.log(m2);

const [first, second,... rest] = t;
console.log(first);
console.log(second);
console.log(rest);