import React from 'react';
import ReactDOM from 'react-dom';

function App(){
    return(
        <div className="wrapper">
            <Card />
            <Card />
            <Card />
        </div>
    )
}

function Card(){
    return(
        <div className="card">
            <div className="container">
                <img src="https://png.pngitem.com/pimgs/s/200-2007397_black-diamond-cool-remixit-idk-engagement-ring-vector.png"  alt="img"/>
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