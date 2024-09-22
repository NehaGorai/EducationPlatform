import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa'; // Importing icons

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="bg-gray-800 p-4 fixed top-0 w-full text-white flex justify-between items-center">
                <div className="text-2xl">EdPlatform</div>

                {/* SearchBar */}
                <div className="hidden md:block w-full md:w-1/2"> {/* Set width for larger screens */}
                    <div className="relative">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                            type="text"
                            step={5}
                            placeholder="Search for a course..."
                            className="p-3 pl-10 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                    </div>
                </div>

                {/* Hamburger and Close Icon */}
                <div className="md:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <FaTimes className="text-2xl cursor-pointer" />
                    ) : (
                        <FaBars className="text-2xl cursor-pointer" />
                    )}
                </div>

                {/* Navigation Menu */}
                <nav
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } md:flex space-x-4 absolute md:static top-16 left-0 bg-gray-800 w-full md:w-auto p-4 md:p-0 md:top-auto`}
                >
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                        <li className="hover:text-gray-400">Home</li>
                        <li className="hover:text-gray-400">Courses</li>
                        <li className="hover:text-gray-400">About</li>
                        <li className="hover:text-gray-400">Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
