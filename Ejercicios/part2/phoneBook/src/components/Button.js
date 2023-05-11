// -*- coding: utf-8 -*- 
/*
@author: lamorales@unah.hn || alejandrom646@gmail.com ||iamchapita
@date: 2023/05/11
@version: 0.1.0
*/

const Button = ({ handleAction }) => {

    return (
        <input type="button" value={"Delete"} onClick={handleAction}></input>
    )
}

export default Button;