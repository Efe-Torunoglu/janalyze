'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="text-xl ">Janalyze 日本語アナライザ-</div>

                    {/* Desktop menu */}
                    <nav className="hidden md:flex space-x-4">
                        <Link href="/" className="hover:text-gray-300">Analyzer</Link>
                        <Link href="/about" className="hover:text-gray-300">About</Link>
                    </nav>
                    </div>
            </div>
        </header>
    );
};

export default Header;