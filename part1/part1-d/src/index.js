import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {

    // Dos partes de estado 
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);

	return (
		<div>
			{left}
            <button onClick={() => setLeft(left + 1)}>Left</button> 
            <button onClick={() => setRight(right + 1)}>Right</button>
            {right}
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
