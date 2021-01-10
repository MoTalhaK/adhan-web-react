import React from 'react';
import './header.css';

const Header = (props) => {
    return (
        <header>
            <div>
                <h1 id="main-title">My Salat</h1>
                <div className="timer">
                    <h2 id="next-prayer-text"></h2>
                    <h2 id="next-prayer"></h2>
                </div>
            </div>
        </header>
    );
};

export default Header;