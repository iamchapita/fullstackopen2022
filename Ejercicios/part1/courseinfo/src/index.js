import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	)
}

const Content = (props) => {
	return (
		<div>
			<p>
				{props.part}: {props.exercises}
			</p>
		</div>
	)
}

const Total = (props) => {
	return (
		<div>
			<p>Total de Ejercicios: {props.suma}</p>
		</div>
	)
}

const App = () => {
	const course = "Desarrollo de Aplicación usando Medio Stack";
	const part1 = "Fundamentos de React";
	const exercises1 = 10;
	const part2 = "Usando Props para pasar data";
	const exercises2 = 7;
	const part3 = "Estado del Componente";
	const exercises3 = 14;

	return (
		<div>
			<Header course={course} />
			<Content part={part1} exercises={exercises1} />
			<Content part={part2} exercises={exercises2} />
			<Content part={part3} exercises={exercises3} />

			<Total suma={exercises1 + exercises2 + exercises3} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
