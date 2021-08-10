import React from 'react';
import { Link } from 'react-router-dom';
import Landing from '../../pages/landing/Landing';

export default function Navigation() {
    return (
        <div className="pMono" style={{backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/769/924/837/best-of-space-high-resolution-wallpaper-preview.jpg)"}}>
            <h3>
                Logout
                <Link key="Logout" to={ Landing } ></Link>
            </h3>
        </div>
    )
}
