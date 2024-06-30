import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 text-white w-full">
            <ul className="flex justify-center">
                <li><Link to="/" className="px-4 py-2">Home</Link></li>
                <li><Link to="/about" className="px-4 py-2">About</Link></li>
                <li><Link to="/projects" className="px-4 py-2">Projects</Link></li>
                <li><Link to="/contact" className="px-4 py-2">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;