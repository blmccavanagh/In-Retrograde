import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import auth from '../../utils/auth';

import Header from '../../components/header/Header';

export default function Profile() {

    const history = useHistory();
    /// check if there is a token in local storage
    // if no redirect the user to login page
    useEffect(() => {
        auth.loggedIn() || history.push('/login')

    }, [history]);

    return (
        <div>
            <Header />
            <div className="h-full md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
            >
                <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-10 lg:opacity-75 inset-0 z-0"></div>
                <div className="w-full z-10">
                    <br />
                    <div className="poppins text-center text-white">
                        <h1 className="pMono font-bold text-2xl">Hello (user)!</h1>
                        <br />
                        <br />
                        <ul>
                            <li><Link className="bg-purple-900 rounded p-1">Update Username</Link></li>
                            <br />
                            <li><Link className="bg-purple-900 rounded p-1">Update Name</Link></li>
                            <br />
                            <li><Link className="bg-purple-900 rounded p-1">Update DOB</Link></li>
                            <br />
                            <li><Link className="bg-purple-900 rounded p-1">Update Time of Birth</Link></li>
                            <br />
                            <li><Link className="bg-purple-900 rounded p-1">Update Place of Birth</Link></li>
                            <br />
                            <li><Link className="bg-purple-900 rounded p-1">Update Password</Link></li>
                            <br />
                            <li><Link className="bg-purple-900 rounded p-1">Delete Account</Link></li>
                            <br />
                        </ul>
                    </div>
                </div>
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

        </div>
    )
}
