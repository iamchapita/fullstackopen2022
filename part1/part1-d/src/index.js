import React, { useState } from "react";
import ReactDOM from "react-dom";

/*
está prohibido en React mutar el state directamente, ya que puede provocar efectos secundarios inesperados. El cambio de estado siempre debe realizarse estableciendo el estado en un nuevo objeto. Si las propiedades del objeto de estado anterior no se modifican, simplemente deben copiarse, lo que se hace copiando esas propiedades en un nuevo objeto y estableciendo eso como el nuevo estado. 
*/

const History = ({ allClicks }) => {
	if (allClicks.length === 0) {
		return <div>Comienza clickeando un boton.</div>;
	} else {
		return (
			<div>Historial de Botones Clickeados: {allClicks.join(" ")}</div>
		);
	}
};

const Button = ({ onClick, text }) => {
	return <button onClick={onClick}>{text}</button>;
};

const App = () => {
	// Dos partes de estado
	const [clicks, setClicks] = useState({ left: 0, right: 0 });
	// Almacenando el nombre del click que se hizo
	const [allClicks, setAllClicks] = useState([]);

	// Para poder cambiar el valor de las variables se necesitan funciones
	const hadleLeftClick = () => {
		// Se utiliza el metodo concat porque este no muta la variable allClicks
		setAllClicks(allClicks.concat("I"));
		// Propiedad Spread
		setClicks({ ...clicks, left: clicks.left + 1 });
	};

	const hadleRightClick = () => {
		// Se utiliza el metodo concat porque este no muta la variable allClicks
		setAllClicks(allClicks.concat("D"));
		// Propiedad Spread
		setClicks({ ...clicks, right: clicks.right + 1 });
	};

	return (
		<div>
			{clicks.left}
			<Button onClick={hadleLeftClick} text="Left" />
			<Button onClick={hadleRightClick} text="Right" />
			{clicks.right}
			<History allClicks={allClicks} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
