import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	);
};

const Content = (props) => {
	return (
		<div>
			<p>
				{props.part}: {props.exercises}
			</p>
		</div>
	);
};

const Total = (props) => {
	return (
		<div>
			<p>Total de Ejercicios: {props.suma}</p>
		</div>
	);
};

const App = () => {
	const course = {
		name: "Desarrollo de Aplicación usando MERN Stack",
		parts: [
			{
				name: "Fundamentos de React",
				exercises: 10,
			},
			{
				name: "Usando Props para pasar data",
				exercises: 7,
			},
			{
				name: "Estado del Componente",
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course.name} />
			<Content
				part={course.parts[0]["name"]}
				exercises={course.parts[0]["exercises"]}
			/>
			<Content
				part={course.parts[1]["name"]}
				exercises={course.parts[1]["exercises"]}
			/>
			<Content
				part={course.parts[2]["name"]}
				exercises={course.parts[2]["exercises"]}
			/>

			<Total
				suma={
					course.parts[0]["exercises"] +
					course.parts[1]["exercises"] +
					course.parts[2]["exercises"]
				}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
