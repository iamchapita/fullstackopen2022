// -*- coding: utf-8 -*-
/*
@author: lamorales@unah.hn || alejandrom646@gmail.com ||iamchapita
@date: 2023/01/18
@version: 0.1.0
*/

import Country from "./Country";

const Result = ({ countries, countriesToShow, setCountriesToShow }) => {
	if (countries.length === 1) {
		return (
			<div>
				{countries.map((country, i) => {
					return (
						<div key={i}>
							<Country
								country={country}
								countriesToShow={countriesToShow}
								setCountriesToShow={setCountriesToShow}
							/>
						</div>
					);
				})}
			</div>
		);
	} else if (countries.length >= 2 && countries.length <= 10) {
		return (
			<div>
				{countries.map((country, i) => {
					return (
						<div key={i}>
							<Country
								country={country}
								countriesToShow={countriesToShow}
								setCountriesToShow={setCountriesToShow}
							/>
						</div>
					);
				})}
			</div>
		);
	} else if (countries.length > 10) {
		return <div> Too many matches, specify another filter</div>;
	}

	return <div></div>;
};

export default Result;
