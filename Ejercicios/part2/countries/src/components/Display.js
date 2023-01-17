// -*- coding: utf-8 -*-
/*
@author: lamorales@unah.hn || alejandrom646@gmail.com ||iamchapita
@date: 2023/01/16
@version: 0.1.0
*/

import React from "react";

const Display = ({ countries }) => {
	if (countries.length > 10 || countries.length == 0) {
		return <div>Too many matches, specify another name to filter.</div>;
	}
	if (countries.length > 1 && countries.length < 11) {
		return (
			<ul>
				{countries.map((country, i) => (
					<li key={i}>{country.name.common}</li>
				))}
			</ul>
		);
	}
	if (countries.length == 1) {
		return (
			<div>
				{countries.map((country, j) => (
					<div>
						<h1>{country.name.common}</h1>
						<p>Capital: {country.capital[0]}</p>
						<p>Population: {country.population}</p>
						<h2>Languages</h2>
						<ul>
							<li key={j}>{Object.values(country.languages)}</li>
						</ul>
						<img src={country.flags.png}></img>
					</div>
				))}
			</div>
		);
	}
};

export default Display;
