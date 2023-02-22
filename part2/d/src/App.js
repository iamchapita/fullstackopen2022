import React, { useEffect, useState } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState("");
	const [showAll, setShowAll] = useState(true);

	// Effect Hook
	/* 

    Effect Hook le permite realizar efectos secundarios en componentes de funciones. Obtener datos, configurar una suscripción y cambiar manualmente el DOM en los componentes de React son todos ejemplos de efectos secundarios.
     */

	const hook = () => {
		axios.get("http://localhost:3001/notes").then((response) => {
			setNotes(response.data);
		});
	};
	/* 
        Ahora podemos ver más claramente que la función useEffect en realidad toma dos parámetros. La primera es una función, el efecto en sí mismo. Según la documentación:

            De forma predeterminada, los efectos se ejecutan después de cada renderizado completo, pero puede elegir activarlo solo cuando ciertos valores han cambiado.

        El segundo parámetro de useEffect se usa para especificar la frecuencia con la que se ejecuta el efecto. Si el segundo parámetro es una matriz vacía [], entonces el efecto solo se ejecuta junto con el primer renderizado del componente.
    */
	useEffect(hook, []);

	const addNote = (event) => {
		// Evita que se envie el formulario.
		// Solo para fines de verificar si el evento se dispara.
		event.preventDefault();
		// console.log("Button Clicked", event.target);

		// Se instancia un nuevo objeto donde se contiene la nota.
		// EVITA MUTAR EL ESTADO DIRECTAMENTE.
		const noteObject = {
			content: newNote,
			date: new Date().toISOString(),
			import: Math.random() < 0.5,
			id: notes.length + 1,
		};
		// Se concatena la nueva nota al objeto de notas
		setNotes(notes.concat(noteObject));
		setNewNote("");
	};

	const handleNoteChange = (event) => {
		// La propiedad target del objeto de evento ahora corresponde al elemento input controlado y event.target.value se refiere al valor de entrada de ese elemento.
		// console.log(event.target.value);
		setNewNote(event.target.value);
	};

	// Si el valor de showAll es falso, la variable notesToShow se asignará a una lista que solo contiene notas que tienen la propiedad important establecida en true.
	// NotesToShow es el objeto que contiene las notas a mostrar.
	const notesToShow = showAll
		? notes
		: notes.filter((note) => note.important);

	const handleShowAll = () => {
		setShowAll(!showAll);
	};

	return (
		<div>
			<h1>Notes</h1>
			<div>
				<button onClick={handleShowAll}>
					{/* Define la etiqueta del boton */}
					Show {showAll ? "important" : "all"}
				</button>
			</div>
			<ul>
				{notesToShow.map((note) => (
					<Note key={note.id} note={note} />
				))}
			</ul>
			<form onSubmit={addNote}>
				<input value={newNote} onChange={handleNoteChange} />
				<button type="submit">Save</button>
			</form>
		</div>
	);
};

export default App;
