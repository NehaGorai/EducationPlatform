import React from 'react'

function Header() {
    return (
        <>
            <header className="bg-zinc-900 p-4 flex justify-between items-center">
                <div className="text-white text-2xl">EdPlatform</div>
                <input
                    type="text"
                    placeholder="Search Courses..."
                    className="p-2 w-1/3 rounded"
                />

                <nav>
                    <ul className="flex space-x-4 text-white">
                        <li>Home</li>
                        <li>Courses</li>
                        <li>About</li>
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default Header
