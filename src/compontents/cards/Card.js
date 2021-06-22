import React from 'react';
import ReactDOM from 'react-dom';

function App(){
    return(
        <div className="wrapper">
            <Card />
        </div>
    )
}

function Card(){
    return(
        <div className="card">
            <div className="card__body">
                <img src="https://s3.envato.com/files/266452806/11022018-IMG_4933.jpg" />
                <h2 className="card__title">Test Coin</h2>
                <p className="card__description">Test Description</p>
                <button className="card__btn">View Coin</button>
            </div>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById("root"))

export default App;