// -*- coding: utf-8 -*-
/*
@author: lamorales@unah.hn || alejandrom646@gmail.com ||iamchapita
@date: 2023/01/18
@version: 0.1.0
*/

import { useState, useEffect } from "react";
import axios from "axios";

import Button from "./Button";

const Country = ({ country, countriesToShow = {}, setCountriesToShow }) => {
	const [weatherIcon, setWeatherIcon] = useState("");
	const [temperature, setTemperature] = useState("");
	const [windSpeed, setWindSpeed] = useState("");
	const [windDirection, setWindDirection] = useState("");

	const apiKey = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		if (country.capital) {
			axios
				.get(
					`http://api.weatherstack.com/current?access_key=${apiKey}&query=${country.capital}`
				)
				.then((response) => {
					// setWeatherIcon(response.data.current.weather_icons[0]);
					// setTemperature(response.data.current.temperature);
					// setWindSpeed(response.data.current.weather_descriptions[0]);
					// setWindDirection(response.data.current.wind_dir);

					setWeatherIcon(
						"https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
					);
					setTemperature("16");
					setWindSpeed("6");
					setWindDirection("5");
				});
		}
	}, []);

	if (countriesToShow[country.name.common]) {
		return (
			<div>
				{country.name.common}
				<div>Capital: {country.capital}</div>
				<div>Poblacion: {country.population}</div>
				<h3>Idiomas</h3>
				<ul>
					{Object.values(country.languages).map((language, i) => (
						<li key={i}>{language}</li>
					))}
				</ul>
				<div>
					<img
						src={country.flags.svg}
						alt="Country Flag"
						width="15%"
						height="15%"
					/>
				</div>
				<div>
					<h3>Weather in {country.capital}</h3>
					<div>
						<div>
							<h4>Temperature</h4>
							<div>{temperature} Celcius</div>
							<img
								src={weatherIcon}
								alt="Weather Icon"
								width="5%"
							/>
						</div>
						<div>
							<h4>wind</h4>
							<div>Speed: {windSpeed} mph</div>
							<div>Direction: {windDirection}</div>
						</div>
					</div>
				</div>
				<Button
					countriesToShow={countriesToShow}
					setCountriesToShow={setCountriesToShow}
					countryName={country.name.common}
				/>
			</div>
		);
	} else {
		return (
			<div>
				{country.name.common}
				<Button
					countriesToShow={countriesToShow}
					setCountriesToShow={setCountriesToShow}
					countryName={country.name.common}
				/>
			</div>
		);
	}
};

export default Country;
