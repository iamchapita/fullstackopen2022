import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Result from "./components/Result";
import axios from "axios";

const App = () => {
	const [countries, setCountries] = useState([]);
	const [countriesToShow, setCountriesToShow] = useState({});
	const [filteredCountries, setFilteredCountries] = useState([]);

	useEffect(() => {
		axios.get("https://restcountries.com/v3.1/all").then((response) => {
			setCountries(response.data);
		});
	}, []);

	useEffect(() => {
		let changeShow = {};
		countries.map((country) => (changeShow[country.name.common] = false));
		setCountriesToShow(changeShow);
	}, []);

	return (
		<div>
			<h1>Countries</h1>
			<Search
				countries={countries}
                countriesToShow={countriesToShow}
                setCountriesToShow={setCountriesToShow}
				filteredCountries={filteredCountries}
				setFilteredCountries={setFilteredCountries}
			/>
		</div>
	);
};

export default App;
