import React from 'react';
import './Header.css';
import Navigation from '../navigation/Navigation'

export default function Header() {
    return (
        <div>
            <header className="p-2 my-4" style={{backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/769/924/837/best-of-space-high-resolution-wallpaper-preview.jpg)"}}>
                <h1 className="pMono text-white font-bold inline-block text-left mr-96 text-2xl">in retrograde</h1>
                <Navigation />
            </header>
        </div>
    )
}
