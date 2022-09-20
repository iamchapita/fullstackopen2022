import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = ({text}) =>{

    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}

const Button = ({handleClick, text}) => {
    return (
        <div>
            <button onClick={handleClick}>{text}</button>
        </div>
    )
}

const Display = ({text, variable}) => {

    if(text){
        return (
            <div>
                <p>{text} {variable} votes</p>
            </div>
        )
    }else{
        return (
            <div>
                <p>{variable}</p>
            </div>
        )
    }
}

const App = () => {

    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]

    const [selected, setSelected] = useState(0);
    const [voted, setVoted] = useState(new Array(anecdotes.length).fill(0));

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const setSelectedValue = () => {
        setSelected(getRandomInt(anecdotes.length));
    }

    const setSelectedVoted = () => {

        // Utilizar esta notación sino el componente no se actualiza
        const copyVoted = [...voted]
        copyVoted[selected] = copyVoted[selected] +1
        setVoted(copyVoted);
    }

    const getMostVoted = Math.max(...voted);
    const getAnecdoteMostVoted = anecdotes[voted.indexOf(getMostVoted)];

    return (
        <div>
            <Header text={'Anecdote of the day'}/>
            <Display text={''} variable={anecdotes[selected]}/>
            <Display text={'has'} variable={voted[selected]}/>

            <Button handleClick={setSelectedValue} text={'next anecdote'}/>
            <Button handleClick={setSelectedVoted} text={'vote'}/>

            <Header text={'Anecdote with most votes'}/>
            <Display text={''} variable={getAnecdoteMostVoted}/>
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
