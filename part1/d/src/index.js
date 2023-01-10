import React, { useDebugValue, useState } from "react";
import ReactDOM from "react-dom";

/*
está prohibido en React mutar el state directamente, ya que puede provocar efectos secundarios inesperados. El cambio de estado siempre debe realizarse estableciendo el estado en un nuevo objeto. Si las propiedades del objeto de estado anterior no se modifican, simplemente deben copiarse, lo que se hace copiando esas propiedades en un nuevo objeto y estableciendo eso como el nuevo estado. 

*/

const Display = ({ value }) => {
	return <div>{value}</div>;
};

const Button = ({ handleClick, text }) => {
	return (
		<div>
			<button onClick={handleClick}>{text}</button>
		</div>
	);
};

const History = ({ allClicks }) => {
	if (allClicks.length === 0) {
		return <div>Comienza clickeando un boton.</div>;
	} else {
		return (
			<div>Historial de Botones Clickeados: {allClicks.join(" ")}</div>
		);
	}
};

const App = () => {
    // Triple estado
	const [clicks, setClicks] = useState({ left: 0, right: 0 });
	// Almacenando el nombre del click que se hizo
	const [allClicks, setAllClicks] = useState([]);
    // Almacenando variable incremental
    const [value, setValue] = useState(0);

    // Manejador de cambio de estado
	const setToValue = (newValue) => {
		setValue(newValue);
	};

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
            <div>
                <Display value={value} />
                <Button handleClick={() => setToValue(0)} text={"Reset"} />
                <Button handleClick={() => setToValue(value + 1000)} text={"Thousand"} />
                <Button handleClick={() => setToValue(value + 1)} text={"Increment +1"}/>
            </div>
            <div>
                <Display value={clicks.left} />
                <Button handleClick={hadleLeftClick} text={"Left"} />
                <Button handleClick={hadleRightClick} text={"Right"} />
                <Display value={clicks.right} />
                <History allClicks={allClicks} />
            </div>
        </div>
	);
};


ReactDOM.render(<App />, document.getElementById("root"));
