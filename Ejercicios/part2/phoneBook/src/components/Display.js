// -*- coding: utf-8 -*- 
/*
@author: lamorales@unah.hn || alejandrom646@gmail.com ||iamchapita
@date: 2023/01/09
@version: 0.1.0
*/

import React from "react";

const Display = ({ persons }) => {
	return (
		<div>
			<ul>
				{persons.map((person) => (
					<li key={person.id}>{person.name} {person.number}</li>
				))}
			</ul>
		</div>
	);
};

export default Display;