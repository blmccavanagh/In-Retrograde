import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../navigation/Navigation';

export default function Header() {
    return (
        <div className="flex justify-between w-screen h-16 md:h-28 text-white md:flex-nowrap mt-4" style={{ backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/769/924/837/best-of-space-high-resolution-wallpaper-preview.jpg)" }}>
            {/* <!-- LOGO --> */}
            <div className="z-30 flex items-center h-full pl-3 space-x-3" >
                <img className="h-16 w-16 md:h-28 md:w-28" src={logo} alt="Hand holding moon and stars." />
                <h1 className="pMono text-white font-bold inline-block text-left ml-0 lg:text-4xl">in retrograde</h1>
            </div>

            <Navigation></Navigation>
        </div>

    )
}