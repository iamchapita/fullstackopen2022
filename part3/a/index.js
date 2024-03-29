// -*- coding: utf-8 -*-
/*
@author: lamorales@unah.hn || alejandrom646@gmail.com ||iamchapita
@date: 2023/08/30
@version: 0.0.1
*/
const express = require("express");
const app = express();

app.use(express.json());

let notes = [
	{
		id: 1,
		content: "HTML is easy",
		date: "2019-05-30T17:30:31.098Z",
		important: true,
	},
	{
		id: 2,
		content: "Browser can execute only Javascript",
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

app.get("/", (request, response) => {
	response.send("<h1>Hello World!</h1>");
});

app.get("/api/notes", (request, response) => {
	response.status(200).json(notes);
});

const generateId = () => {
	const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
	return maxId + 1;
};

app.post("/api/notes", (request, response) => {
	const body = request.body;

	if (!body.content) {
		return response.status(400).json({
			error: "content missing",
		});
	}

	const note = {
		id: generateId(),
		content: body.content,
		important: body.important || false,
		date: new Date(),
	};

	notes = notes.concat(note);

	response.status(200).json(note);
});

app.get("/api/notes/:id", (request, response) => {
	const id = parseInt(request.params.id);
	const note = notes.find((note) => note.id === id);

	return note !== undefined
		? response.status(200).json(note)
		: response.status(404).end();
});

app.delete("/api/notes/:id", (request, response) => {
	const id = parseInt(request.params.id);
	notes = notes.filter((note) => note.id !== id);

	return response.status(200).json(notes);
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
