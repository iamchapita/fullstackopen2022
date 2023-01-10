import React, { useState } from "react";
import Display from "./components/Display";
import Input from "./components/Input";

const App = () => {
	const [persons, setPersons] = useState([
		{ id: 0, name: "Arto Hellas", number: "040-123456" },
		{ id: 1, name: "Ada Lovelace", number: "39-44-5323523" },
		{ id: 2, name: "Dan Abramov", number: "12-43-234345" },
		{ id: 3, name: "Mary Poppendieck", number: "39-23-6423122" },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filteredPersons, setFilteredPersons] = useState(persons);

	const addPerson = (event) => {
		// Evita que el formulario se envie
		event.preventDefault();
		// Si el valor del input ya existe en el arrelgo persons...
		if (
			persons.filter((person) => person.name == newName)[0] != undefined
		) {
			window.alert(`${newName} is already added to phonebook`);
		} else {
			let newPerson = {
				id: persons.length + 1,
				name: newName,
				number: newNumber,
			};

			setPersons(persons.concat(newPerson));
			setFilteredPersons(filteredPersons.concat(newPerson));
			setNewName("");
			setNewNumber("");
		}
	};

	const handleNameInputChanges = (event) => {
		setNewName(event.target.value);
	};

	const handleNumberInputChanges = (event) => {
		setNewNumber(event.target.value);
	};

	const handleSearchInputChanges = (event) => {
		setFilteredPersons(
			persons.filter((person) =>
				person.name.toLowerCase().includes(event.target.value.toLowerCase())
			)
		);
	};

	return (
		<div>
			<h1>NumberBook</h1>
            <Input inputName={'Search for a phone'} inputEventHandler={handleSearchInputChanges}/>
			<h2>Add New</h2>
			<form onSubmit={addPerson}>
				<Input inputName={'Name'} inputEventHandler={handleNameInputChanges} value={newName}/>
				<Input inputName={'Number'} inputEventHandler={handleNumberInputChanges} value={newNumber}/>
				<button type="submit">Add</button>
			</form>
			<h2>Numbers</h2>
			<Display persons={filteredPersons} />
		</div>
	);
};

export default App;
