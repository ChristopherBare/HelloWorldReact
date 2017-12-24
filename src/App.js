import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    render() {
        return <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Hello, World!</h1>
            </header>

            <p className="App-intro">My first React App.
                It does absolutely nothing, except look at that
                thing at the top spin! Isn't it beautifully
                <strong> hypnotic</strong>?
            </p>
        </div>;
    }
}


export default App;
