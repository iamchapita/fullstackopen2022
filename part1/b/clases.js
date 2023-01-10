// -*- coding: utf-8 -*- 
/*
@author: lamorales@unah.hn||iamchapita
@date: 2022/08/08
@version: 0.1.0
*/

class Person {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log('Hola Mundo soy ' + this.name);
    }

}


const paisa = new Person('Paisa', 24);

paisa.greet();
