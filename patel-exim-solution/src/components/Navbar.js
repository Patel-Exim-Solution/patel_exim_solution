'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { FaPhone } from 'react-icons/fa';
import { MdPhoneEnabled } from "react-icons/md";
import { MdEmail } from 'react-icons/md';

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

    const isActive = (key) => {
        if (key === 'home') {
            return pathname === '/';
        }
        return pathname.startsWith(`/${key}`);
    };

    return (
        <nav className="navbar-container">
            <div className="top-navbar flex items-center gap-[24] justify-end px-[96] py-[23]">
                <span className='flex items-center gap-[6] text-sm tracking-[0.6] font-light primary-text-color'><MdPhoneEnabled size={20} /> 93482 34224</span>
                <span className='flex items-center gap-[6] text-sm tracking-[0.6] font-light primary-text-color'><MdEmail size={20} /> google@gmail.com</span>
            </div>
            <div className='navbar px-[96] p-l-r-40 py-[12] flex items-center justify-between'>
                <div className='img-container'>
                    <Image src="/LOGO.png" alt="Company Logo"
                        width={80}
                        height={80} />
                </div>
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
            </div>
        </nav>
    )
}