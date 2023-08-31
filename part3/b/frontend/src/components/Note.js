// -*- coding: utf-8 -*-
/*
@author: lamorales@unah.hn || alejandrom646@gmail.com ||iamchapita
@date: 2022/12/26
@version: 0.1.0
*/

import React from "react";

const Note = ({ note, toggleImportance }) => {

    const label = note.important ? 'Make not Important' : 'Make important';

    return (
        <div>
            <li className="note">
                {note.content}
                <button onClick={toggleImportance}>{label}</button>
            </li>
        </div>
    );
};

export default Note;