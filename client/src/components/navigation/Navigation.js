import React from 'react';
import { Link } from 'react-router-dom';
import Landing from '../../pages/landing/Landing';

export default function Navigation() {
    return (
        <div className="pMono inline-block text-right">
            <h3 className="text-white ml-96 font-bold text-2xl">
                Logout
                <Link key="Logout" to={ Landing } ></Link>
            </h3>
        </div>
    )
}
