// -*- coding: utf-8 -*-
/*
@author: lamorales@unah.hn || alejandrom646@gmail.com ||iamchapita
@date: 2023/01/16
@version: 0.1.0
*/

import React from "react";
import Detail from "./Detail";

const Display = ({ countries }) => {

    if(countries.length == 0){
        return <div>Not matches found</div>
    }

	if (countries.length > 10) {
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
	if (countries.length === 1) {
		return <Detail countries={countries} />;
	}
};

export default Display;
