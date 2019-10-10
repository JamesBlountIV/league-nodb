import React, {Component} from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <button><li>Home</li></button>
                    <button><li>Champions</li></button>
                    <button><li>Streams</li></button>
                </ul>
            </nav>
        )
    }
}