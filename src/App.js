import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/navbar/navbar.components';
import AboutPage from "./about/about.components";
import HomePage from './home/home.components';

class App extends React.Component {
    constructor() {
        super()

    }
    render() {
        return (
            <div className="App">
                <Nav />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/about' component={AboutPage} />
                </Switch>
            </div>
        )
    }

}



export default App;
