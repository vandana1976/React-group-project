import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/Navigation.css"

const Navigation = () => {
    return (
        <div>
            <ul>
                <li style={{marginLeft: "50px"}}><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/bookshelf">Bookshelf</NavLink></li>
                <li><NavLink to="/buy">Buy</NavLink></li>
            </ul>

        </div>
    )
}

export default Navigation