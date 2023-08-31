// -*- coding: utf-8 -*- 
/*
@author: lamorales@unah.hn || alejandrom646@gmail.com ||iamchapita
@date: 2023/05/11
@version: 0.1.0
*/

import React from "react";

const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className="error">
            {message}
        </div>
    )
}

export default Notification;