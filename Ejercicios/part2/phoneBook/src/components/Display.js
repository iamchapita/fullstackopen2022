// -*- coding: utf-8 -*- 
/*
@author: lamorales@unah.hn || alejandrom646@gmail.com ||iamchapita
@date: 2023/01/09
@version: 0.1.0
*/

import React from "react";
import Button from "./Button";

const Display = ({ persons, handleDeleteButtonAction }) => {
	return (
		<div>
			<ul>
				{persons.map((person, index) => (
					<div key={index}>
						<li>{person.name} {person.number}</li>
						<Button handleAction={() => { handleDeleteButtonAction(person.id) }} />
					</div>
				))}
			</ul>
		</div>
	);
};

export default Display;