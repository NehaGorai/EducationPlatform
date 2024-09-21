import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white fixed bottom-0 w-full p-2 text-center">
            <p>© 2024 EdPlatform. All Rights Reserved.</p>
            <div className="flex justify-center space-x-2 mt-1">
                <button>Youtube</button>
                <button>Twitter</button>
                <button>LinkedIn</button>
            </div>
        </footer>
    );
};

export default Footer;
