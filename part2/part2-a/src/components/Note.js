// -*- coding: utf-8 -*-
/*
@author: lamorales@unah.hn || alejandrom646@gmail.com ||iamchapita
@date: 2022/12/26
@version: 0.1.0
*/

import React from "react";

const Note = ({ note }) => {
	return (
		<div>
			<li> {note.content} </li>
		</div>
	);
};

export default Note;