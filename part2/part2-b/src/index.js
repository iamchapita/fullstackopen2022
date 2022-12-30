import React from "react";
import ReactDOM from "react-dom";
import Note from "./components/Note";
import App from "./App";

/* 
React utiliza los atributos key de los objetos en una matriz para determinar cómo actualizar la vista generada por un componente cuando el componente se vuelve a renderizar.  
*/

/* Tenga en cuenta que al importar nuestros propios componentes, se debe dar su ubicación en relación con el archivo de importación: 

El punto - . - al principio se refiere al directorio actual, por lo que la ubicación del módulo es un archivo llamado Note.js en el subdirectorio components del directorio actual. La extensión del nombre de archivo - .js - se puede omitir.
*/

const notes = [
	{
		id: 1,
		content: "HTML is easy",
		date: "2019-05-30T17:30:31.098Z",
		important: true,
	},
	{
		id: 2,
		content: "Browser can execute only JavaScript",
		date: "2019-05-30T18:39:34.091Z",
		important: false,
	},
	{
		id: 3,
		content: "GET and POST are the most important methods of HTTP protocol",
		date: "2019-05-30T19:20:14.298Z",
		important: true,
	},
];

ReactDOM.render(<App notes={notes}/>, document.getElementById("root"));
