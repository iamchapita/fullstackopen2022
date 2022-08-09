import React, { useState } from "react";
import ReactDOM from "react-dom";

// Ya no se recibe el objeto props, si no dos variables con los datos
const Hello = ({ name, age }) => {
	// Esta es una función auxiliar del componente
	const bornYear = () => {
		const yearNow = new Date().getFullYear();
		return yearNow - age;
	};

	return (
		<div>
			<p>
				Hola {name} tienes {age} años
			</p>
			<p>Naciste en {bornYear()}</p>
		</div>
	);
};

let counter = 1;

// Incluimos funciones para renderizado de la pagina de forma dinamica
const App = () => {
	const [counter, setCounter] = useState(0);

	setTimeout(() => {
		setCounter(counter + 1);
	}, 1000);

    console.log(counter);

	return (
		<div>
			<Hello name={"Alejandro"} age={24} />
			{counter}
		</div>
	);
};

ReactDOM.render(<App counter={counter} />, document.getElementById("root"));
