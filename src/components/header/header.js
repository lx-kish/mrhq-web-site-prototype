import React from 'react';
import { Link } from 'react-router-dom';
import MainMenu from './menu';

const Header = () => {

    return (
        <header className="header">
            <MainMenu/>
        </header>
    )
}

export default Header;