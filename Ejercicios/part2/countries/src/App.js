import React, { useEffect, useState } from "react";
import Display from "./components/Display";
import axios from "axios";

const App = () => {

    const [countries, setCountries] = useState([]);
	const [subsetCountries, setSubsetCountries] = useState([]);
    
	const hook = () => {
        axios.get("https://restcountries.com/v3.1/all").then((response) => {
            setCountries(response.data);
            setSubsetCountries(response.data);
		});
	};
    
    useEffect(hook, []);

	const searchCountries = (event) => {
		setSubsetCountries(
			countries.filter((country) =>
				country.name.common.includes(event.target.value)
			)
		);
	};

	return (
		<div>
			<h1>Countries</h1>
			Search: <input type="text" onChange={searchCountries}></input>
			<Display countries={subsetCountries} />
		</div>
	);
};

export default App;
