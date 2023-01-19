// -*- coding: utf-8 -*-
/*
@author: lamorales@unah.hn || alejandrom646@gmail.com ||iamchapita
@date: 2023/01/17
@version: 0.1.0
*/

import { useState } from "react";
import Result from "./Result";

const Search = ({ countries, countriesToShow, setCountriesToShow }) => {
	const [searchName, setSearchName] = useState("");
	const [filteredCountries, setFilteredCountries] = useState([]);

	const handleChange = (event) => {
		setSearchName(event.target.value);
		setFilteredCountries(
			countries.filter((country) =>
				country.name.common.includes(event.target.value)
			)
		);
	};

	return (
		<div>
			find countries <input value={searchName} onChange={handleChange} />
			<Result
				countries={filteredCountries}
				countriesToShow={countriesToShow}
				setCountriesToShow={setCountriesToShow}
			/>
		</div>
	);
};

export default Search;
