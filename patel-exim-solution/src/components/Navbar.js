'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
// import { FaPhone } from 'react-icons/fa';
import { MdPhoneEnabled } from "react-icons/md";
import { MdEmail } from 'react-icons/md';
import { HiMenuAlt3, HiPhone } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

const navbarList = [
    {
        key: 'home',
        value: 'Home',
    },
    {
        key: 'about',
        value: 'About Us'
    },
    {
        key: 'contact',
        value: 'Contact Us',
    },
    {
        key: 'products',
        value: 'Products'
    },
]

export default function Navbar() {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const isActive = (key) => {
        if (key === 'home') {
            return pathname === '/';
        }
        return pathname.startsWith(`/${key}`);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isSidebarOpen) {
                closeSidebar();
            }
        };

        if (isSidebarOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSidebarOpen]);

    // Close sidebar when route changes
    useEffect(() => {
        closeSidebar();
    }, [pathname]);

    return (
        <nav className="navbar-container">
            <div className="top-navbar flex items-center gap-[24] justify-end px-[96] p-l-r-20 p-l-r-40 p-l-r-60 py-[23]">
                <span className='flex items-center gap-[6] text-sm tracking-[0.6] font-light primary-text-color'><HiPhone size={20} color="#22223B" /> +91 95101 24299</span>
                <span className='flex items-center gap-[6] text-sm tracking-[0.6] font-light primary-text-color'><MdEmail size={20} /> ptlexims1@gmail.com</span>
            </div>
            <div className='navbar px-[96] p-l-r-20 p-l-r-40 p-l-r-60 py-[12] flex items-center justify-between'>
                <div className='img-container'>
                    <Image src="/LOGO.png" alt="Company Logo"
                        width={80}
                        height={80} />
                </div>
                
                {/* Desktop Navigation */}
                <ul className='nav-list flex items-center gap-[20]'>
                    {navbarList.map((nav) => (
                        <li className='nav-link' key={nav.key}>
                            <Link 
                                href={`/${nav.key === 'home' ? '' : nav.key}`} 
                                className={`nav-item text-sm font-normal primary-text-color ${isActive(nav.key) ? 'active' : ''}`}
                            >
                                {nav.value}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Menu Button */}
                <button 
                    className='hamburger-menu-btn'
                    onClick={toggleSidebar}
                    aria-label="Toggle menu"
                >
                    <HiMenuAlt3 size={32} className='primary-text-color' />
                </button>
            </div>

            {/* Sidebar Overlay */}
            {isSidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

            {/* Sidebar */}
            <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <Image src="/LOGO.png" alt="Company Logo" width={60} height={60} />
                    <button 
                        className='close-sidebar-btn'
                        onClick={closeSidebar}
                        aria-label="Close menu"
                    >
                        <IoClose size={28} />
                    </button>
                </div>
                <ul className='sidebar-nav-list'>
                    {navbarList.map((nav) => (
                        <li className='sidebar-nav-link' key={nav.key}>
                            <Link 
                                href={`/${nav.key === 'home' ? '' : nav.key}`} 
                                className={`sidebar-nav-item ${isActive(nav.key) ? 'active' : ''}`}
                            >
                                {nav.value}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="sidebar-contact-info">
                    <div className='sidebar-contact-item'>
                        <MdPhoneEnabled size={20} />
                        <span>951 012 4299</span>
                    </div>
                    <div className='sidebar-contact-item'>
                        <MdEmail size={20} />
                        <span>ptlexims1@gmail.com</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}