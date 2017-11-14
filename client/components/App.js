import React from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';


import {Main} from "./main/main"
export class App extends React.Component {
    render() {
        return (
            <Router>
                <Main/>
            </Router>
        );
    }
};


