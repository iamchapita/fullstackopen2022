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
				{props.name}
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
	const course = 'Desarrollo de Aplicación usando MERN Stack';

    const parts = [
        {
            name: 'Fundamentos de React',
            exercises: 10
        },
        {
            name: 'Usando props para pasar data',
            exercises: 7
        },
        {
            name: 'Estado de Componente',
            exercises: 14
        }
    ];

	return (
		<div>
			<Header course={course} />
			<Content name={parts[0].name} />
			<Content name={parts[1].name} />
			<Content name={parts[2].name} />
            <Total suma={parts[0].exercises + parts[1].exercises + parts[2].exercises} /> 
            
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
