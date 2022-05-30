// -*- coding: utf-8 -*-
/*
@author: lamorales@unah.hn||iamchapita
@date: 2022/05/30
@version: 0.1.0
*/

const object1 = {
	name: "Luis Morales",
	age: 23,
	edutacion: "Systems Engenieer",
};

const object2 = {
	name: "Full Stack Web Application Development",
	level: "Intermediate Studies",
	size: 5,
};

const object3 = {
	name: {
		first: "Alejandro",
		last: "Morales",
	},
	grades: [2, 3, 4, 5],
	departament: "Standfor University",
};

console.log(object3.name.first);
console.log(object3['name']['last']);


object3.carreer = 'Systems Engineering';

console.log(object3)