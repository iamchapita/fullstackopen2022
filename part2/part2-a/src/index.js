import React from "react";
import ReactDOM from "react-dom";

/* 
React utiliza los atributos key de los objetos en una matriz para determinar cómo actualizar la vista generada por un componente cuando el componente se vuelve a renderizar.  
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

const Note = ({ note }) => {
	return (
		<div>
			<li> {note.content} </li>
		</div>
	);
};

const App = ({ notes }) => {
	return (
		<div>
			<h1>Notes</h1>
			<ul>
                {notes.map(note => (<Note key={note.id} note={note}/>))}
			</ul>
		</div>
	);
};

ReactDOM.render(<App notes={notes} />, document.getElementById("root"));
