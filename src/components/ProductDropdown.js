import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DropdownMenu() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <Link to="/product">Product <span className="arrow">&#9660;</span></Link>
            {showDropdown && (
                <div className="dropdown-content">
                    <a href="#Clothing & Jewelry">Clothing & Jewelry</a>
                    <a href="#Electronics & Gadgets">Electronics & Gadgets</a>
                    <a href="#Toys & Gaming">Toys & Gaming</a>
                </div>
            )}
        </li>
    );
}

export default DropdownMenu;