import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => {
	return (
		<div>
			<button onClick={handleClick}>{text}</button>
		</div>
	);
};

const Statistics = ({ statistic, value }) => {
	return (
		<tbody>
			<tr>
				<td>{statistic}</td>
				<td>{value}</td>
			</tr>
		</tbody>
	);
};

const App = () => {
	const [value, setValue] = useState({ good: 0, neutral: 0, bad: 0 });

	const setGoodValue = () => {
		setValue({ ...value, good: value.good + 1 });
	};
	const setNeutralValue = () => {
		setValue({ ...value, neutral: value.neutral + 1 });
	};
	const setBadValue = () => {
		setValue({ ...value, bad: value.bad + 1 });
	};

	if (value.good === 0 && value.neutral === 0 && value.bad === 0) {
		return (
			<div>
				<h1>Give Feedback</h1>
				<Button handleClick={setGoodValue} text={"Good"} />
				<Button handleClick={setNeutralValue} text={"Neutral"} />
				<Button handleClick={setBadValue} text={"Bad"} />
				<p>No feedback given</p>
			</div>
		);
	} else {
		return (
			<div>
				<h1>Give Feedback</h1>
				<Button handleClick={setGoodValue} text={"Good"} />
				<Button handleClick={setNeutralValue} text={"Neutral"} />
				<Button handleClick={setBadValue} text={"Bad"} />
				<table>
					<Statistics statistic={"good"} value={value.good} />
					<Statistics statistic={"neutral"} value={value.neutral} />
					<Statistics statistic={"bad"} value={value.bad} />
				</table>
			</div>
		);
	}
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
