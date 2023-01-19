// -*- coding: utf-8 -*-
/*
@author: lamorales@unah.hn || alejandrom646@gmail.com ||iamchapita
@date: 2023/01/19
@version: 0.1.0
*/

const Button = ({ countriesToShow, setCountriesToShow, countryName }) => {
	const handleChange = () => {
		let changeShow = { ...countriesToShow };
		changeShow[countryName] = !countriesToShow[countryName];
		setCountriesToShow(changeShow);
	};

	return (
		<button onClick={handleChange}>
			{!countriesToShow[countryName] && "Show"}
			{countriesToShow[countryName] && "Don't Show"}
		</button>
	);
};

export default Button;
