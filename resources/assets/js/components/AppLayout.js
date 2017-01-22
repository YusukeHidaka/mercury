import React from 'react';
import {Link} from 'react-router';

export default class AppLayout extends React.Component{
    render(){
        return (
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">Login</Link>
                </nav>
                {this.props.children}
            </div>
        );
    }
}
