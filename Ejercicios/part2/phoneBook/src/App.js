import React, { useEffect, useState } from "react";
import Display from "./components/Display";
import Input from "./components/Input";
import axios from "axios";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filteredPersons, setFilteredPersons] = useState(persons);

    // Estableciendo el fetch de la data de la "Base de Datos"
	const hook = () => {
		axios.get("http://localhost:3001/persons").then((response) => {
			setPersons(response.data);
            setFilteredPersons(response.data);
		});
	};

    // Usando un EffectHook
	useEffect(hook, []);
    
	const addPerson = (event) => {
		// Evita que el formulario se envie
		event.preventDefault();
		// Si el valor del input ya existe en el arrelgo persons...
		if (
			persons.filter((person) => person.name === newName)[0] !== undefined
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
				person.name
					.toLowerCase()
					.includes(event.target.value.toLowerCase())
			)
		);
	};

	return (
		<div>
			<h1>NumberBook</h1>
			<Input
				inputName={"Search for a phone"}
				inputEventHandler={handleSearchInputChanges}
			/>
			<h2>Add New</h2>
			<form onSubmit={addPerson}>
				<Input
					inputName={"Name"}
					inputEventHandler={handleNameInputChanges}
					value={newName}
				/>
				<Input
					inputName={"Number"}
					inputEventHandler={handleNumberInputChanges}
					value={newNumber}
				/>
				<button type="submit">Add</button>
			</form>
			<h2>Numbers</h2>
			<Display persons={filteredPersons} />
		</div>
	);
};

export default App;
