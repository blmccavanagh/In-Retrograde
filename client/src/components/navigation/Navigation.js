import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <div className="pMono inline-block text-right">
            <Link key="Logout" to="/">
                <button className="text-white ml-96 font-bold text-2xl">
                    Logout
                </button>
            </Link>
        </div>
    )
}
