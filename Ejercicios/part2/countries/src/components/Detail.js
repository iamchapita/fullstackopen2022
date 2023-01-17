// -*- coding: utf-8 -*-
/*
@author: lamorales@unah.hn || alejandrom646@gmail.com ||iamchapita
@date: 2023/01/17
@version: 0.1.0
*/

import React from "react";

const Detail = ({ countries }) => {
	let country = countries[0];
	let languages = Object.values(countries[0].languages);
	return (
		<div>
			<div>
				<h1>{country.name.common}</h1>
				<p>Capital: {country.capital[0]}</p>
				<p>Population: {country.population}</p>
				<h2>Languages</h2>
				<ul>
					{languages.map((language, i) => (
						<li key={i}>{language}</li>
					))}
				</ul>
				<img src={country.flags.png}></img>
			</div>
		</div>
	);
};

export default Detail;
