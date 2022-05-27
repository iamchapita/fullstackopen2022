import React from "react";
import ReactDOM from "react-dom";

const Hello = (props) => {
	return (
		<div>
			<p>Hola Mundo!</p>
			<p>Soy {props.name} y tengo {props.age}</p>
		</div>
	);
};

const App = () => {

    const name = 'Alejandro';
    const age = '23';

	return (
		<div>
			<h1>Bienvenidos</h1>
            <Hello name={name} age={age}/>
		</div>
	);
};

// La linea 16 se encarga de llamar a la variable Hello de 
// la linea 4
ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
