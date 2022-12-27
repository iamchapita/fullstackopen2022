// -*- coding: utf-8 -*-
/*
@author: lamorales@unah.hn || alejandrom646@gmail.com ||iamchapita
@date: 2022/12/26
@version: 0.1.0
*/

import React from "react";
import ReactDOM from "react-dom";

const Header = ({ text }) => {
	return (
		<div>
			<h1>{text}</h1>
		</div>
	);
};

const Parts = ({ name, exercises }) => {
	return (
		<div>
			{name}: {exercises}
		</div>
	);
};

const SumExercises = ({ parts }) => {
	// Se podria usar desestructuracion para contar el numero de cursos
	// Pero se tendria que enviar solamente la llave-valor exercises.

	// const total = parts.reduce((sum, {exercises}) => sum + exercises, startCountFrom);

	// Debe estar definido el valor inicial, de lo contrario no retorna lo esperado la funcionr reduce
	const startCountFrom = 0;
	const total = parts.reduce(
		(sum, current) => sum + current.exercises,
		startCountFrom
	);

	return <div>Total of exercises: {total}</div>;
};

const Course = ({ courses }) => {
	return (
		<div>
			{courses.map((course) => (
                //  Se debe agregar el key al div

                // Problema visible: demasiados divs
				<div key={course.id}>
					<Header key={course.id} text={course.name} />
					{course.parts.map((part) => (
						<Parts
							key={part.id}
							name={part.name}
							exercises={part.exercises}
						/>
					))}
					{<SumExercises parts={course.parts} />}
				</div>
			))}
		</div>
	);
};

export default Course;
