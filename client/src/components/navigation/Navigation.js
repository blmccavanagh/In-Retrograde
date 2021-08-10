import React from 'react';
import { Link } from 'react-router-dom';
import Landing from '../../pages/landing/Landing';

export default function Navigation() {
    return (
        <div>
            <Link key="Logout" to={ Landing } ></Link>
        </div>
    )
}
