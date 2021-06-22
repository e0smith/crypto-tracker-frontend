import React from 'react';
import ReactDOM from 'react-dom';

function App(){
    return(
        <div className="wrapper">
            <h1>Hello</h1>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById("root"))

export default App;