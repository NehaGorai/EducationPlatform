import React from 'react'
import SearchBar from './SearchBar'

function Header() {
    return (
        <>
            <header className="bg-gray-800 p-4 fixed top-0 w-full text-white flex justify-between items-center">
                <div className=" text-2xl">EdPlatform</div>
                <SearchBar />

                <nav>
                    <ul className="flex space-x-4">
                        <li>Home</li>
                        <li>Courses</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default Header
