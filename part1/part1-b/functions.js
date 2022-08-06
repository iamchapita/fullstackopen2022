// -*- coding: utf-8 -*-
/*
@author: lamorales@unah.hn||iamchapita
@date: 2022/05/30
@version: 0.1.0
*/

// Definción de función flecha 
const sum = (p1, p2) => {
	console.log(p1);
	console.log(p2);

	return p1 + p2;
};

console.log(sum(2, 2));


// Usando map con un arreglo
const t = [1,2,3,4];
const tSquared = t.map(p=> p*p);

console.log(tSquared);

// Tipodes de definción de función 
const average = (p1, p2) =>{
    return (p1+p2)/2;
};

console.log(average(5,8));

function average(p1, p2){
    return (p1+p2)/2;
}

