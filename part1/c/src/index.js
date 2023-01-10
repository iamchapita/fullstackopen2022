import React, { useState } from "react";
import ReactDOM from "react-dom";

// Componente encargado solo de mostrar el contador
const Display = ({ counter }) => {
	return <div>{counter}</div>;
};

// Componenete encargado solo de monitorear el evento onClick y
// establecer la funcion a ejecutar cuando ocurra el evento onClick
const Button = ({handleClick, text}) => {

    return (
        <div>
            <button onClick={handleClick}>{text}</button>
        </div>
    );
};

let counter = 1;

const App = () => {

    // Se usa un hook (useState)
    // La funcion setCounter (nombre no obligatorio) es utilizada para actualizar el estado del componente
    const [counter, setCounter] = useState(0);

    // Funciones controladores de evento (responsable de cambiar el estado del componente
    // puesto que aqui se utiliza la funcion setCounter propia del hook useState)
    const increaseByOne = () => {
        setCounter(counter + 1);
    }
    
    const decreaseByOne = () => {
        setCounter(counter - 1);
    }

    const setToZero = () => {
        setCounter(0);
    }

	return (
		<div>
            <Display counter={counter}/>
            <Button handleClick={increaseByOne} text={'Add 1'}/> 
            <Button handleClick={decreaseByOne} text={'Take 1'}/> 
            <Button handleClick={setToZero} text={'Set to 0'}/> 
		</div>
	);
};

ReactDOM.render(<App counter={counter} />, document.getElementById("root"));


