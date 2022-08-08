import React from "react";
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

const refresh = () => {
	ReactDOM.render(<App counter={counter} />, document.getElementById("root"));
};

// Una funcion flecha dentro de un metodo de alguna clase 
setInterval(
    () => {
        refresh();
        counter += 1;
    }, 1000
)

// Incluimos funciones para renderizado de la pagina de forma dinamica
const App = ({ counter }) => {
	return <div>{counter}</div>;
};
