import React, { Component } from 'react';
import { Link } from 'react-router';
import Logo from '../Logo/Logo';
import styles from './nav.scss';

export default class Nav extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className={styles.nav}>
                <Logo />
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/login">
                        <li>Login</li>
                    </Link>
                    <a href="#" target="_blank">
                        <li>GitHub</li>
                    </a>
                </ul>
            </nav>
        );
    }
}
