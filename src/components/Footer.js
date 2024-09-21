import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white fixed bottom-0 w-full p-2 text-center">
            <p>© 2024 EdPlatform. All Rights Reserved.</p>
            <div className="flex justify-center space-x-2 mt-1">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;
