import React, { useEffect, useState } from "react";
import Display from "./components/Display";
import Input from "./components/Input";
import Notification from "./components/Notification";
import axios from "axios";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filteredPersons, setFilteredPersons] = useState(persons);
	const [notificationMessage, setNotificationMessage] = useState(null);
	const [notificationType, setNotificationType] = useState('');

	// Estableciendo el fetch de la data de la "Base de Datos"
	const hook = () => {
		axios.get("http://localhost:3001/persons").then((response) => {
			setPersons(response.data);
			setFilteredPersons(response.data);
		});
	};

	const displayNotification = (message, type, timeOut) => {
		setNotificationType(type)
		setNotificationMessage(message);

		setTimeout(() => {
			setNotificationMessage(null);
			setNotificationType('');
		}, timeOut);
	};

	// Usando un EffectHook
	useEffect(hook, []);

	const addPerson = (event) => {
		// Evita que el formulario se envie
		event.preventDefault();
		// Si el valor del input ya existe en el arrelgo persons...
		if (
			persons.filter((person) => person.name === newName)[0] !== undefined &&
			persons.filter((person) => person.number === newNumber)[0] === undefined
		) {
			let id = 0;
			let response = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);

			if (response === true) {

				let modifiedPersons = persons.filter((person) => {
					if (person.name === newName) {
						person.number = newNumber;
						id = person.id;
					}
				});

				let updatedPerson = {
					name: newName,
					number: newNumber,
					id: id,
				};

				axios.put(`http://localhost:3001/persons/${id}`, updatedPerson).then((response) => {
					hook();
				});

				displayNotification('The phonenumber has been updated.', 'success', 5000);
				setNewName("");
				setNewNumber("");

			}

		} else {

			let newPerson = {
				name: newName,
				number: newNumber,
				id: persons[persons.length -1].id + 1,
			};

			setPersons(persons.concat(newPerson));
			setFilteredPersons(filteredPersons.concat(newPerson));

			axios.post("http://localhost:3001/persons", newPerson).then((response) => {

			});

			displayNotification('New Number has been added.', 'success', 5000);
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

	const handlePersonDelete = (id) => {

		let response = window.confirm('Delete this person?');

		if (response === true) {
			axios.delete(`http://localhost:3001/persons/${id}`).then((response) => {
				let personsFiltered = persons.filter((person) => person.id !== id);
				displayNotification('A person has been deleted.', 'success', 5000);
				setPersons(personsFiltered);
				setFilteredPersons(personsFiltered);
			});
		}

	};

	return (
		<div>
			<h1>NumberBook</h1>
			<Notification message={notificationMessage} type={notificationType} />
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
			<Display persons={filteredPersons} handleDeleteButtonAction={handlePersonDelete} />
		</div>
	);
};

export default App;
