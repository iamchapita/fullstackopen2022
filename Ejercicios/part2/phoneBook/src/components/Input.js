// -*- coding: utf-8 -*-
/*
@author: lamorales@unah.hn || alejandrom646@gmail.com ||iamchapita
@date: 2023/01/10
@version: 0.1.0
*/

import React from "react";

const Input = ({ inputName, inputEventHandler, value }) => {
	return (
		<div>
			{inputName}: <input onChange={inputEventHandler} value={value} />
		</div>
	);
};

export default Input;
