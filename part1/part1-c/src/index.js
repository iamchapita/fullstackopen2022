import React from "react";
import ReactDOM from "react-dom";

// Ya no se recibe el objeto props, si no dos variables con los datos
const Hello = ({name, age}) => {

    // Esta es una función auxiliar del componente 
    const bornYear = () => {
        const yearNow = new Date().getFullYear();
        return yearNow - age;
    };

    return(
        <div>
            <p>Hola {name} tienes {age} años</p>
            <p>Naciste en {bornYear()}</p>  
        </div>
    );
}

const App = () => {

    const name = 'Alejandro';
    const age = 24;

    return (
        <div>
            <h1>Hola Mundo</h1>
            <Hello name={name} age={age}/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));