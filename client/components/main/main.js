import React from 'react';
import {Link,Route} from 'react-router-dom';

export class Main extends React.Component {
    render() {
        return (

                <div>
                    <h1>
                        <Link to="/">Reduxstagram</Link>
                    </h1>
                    <div className="page-content">
                        {this.props.children}
                    </div>
                </div>

        );
    }
};


