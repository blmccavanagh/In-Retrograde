import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import auth from '../../utils/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faArrowUp, faArrowRight, faMercury, faVenus, faMars, faJupiter } from '@fortawesome/free-solid-svg-icons';

import Header from '../../components/header/Header';

import profileImage from '../../images/profile.png';

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
                        <img src={profileImage} className="rounded-full h-24 w-24 mx-auto" />
                        <br />
                        <h1 className="pMono font-bold text-2xl">Hello Bridget!</h1>
                        <br />
                        <br />

                        <div className="grid grid-cols-2 gap-2 bg-purple-500 bg-opacity-90 p-4 rounded-2xl">
                            <p className="bg-white text-black">Name</p>
                            <input type="text" placeholder="Bridget Louise McCavanagh"></input>
                            <p className="bg-white text-black">Username</p>
                            <input type="text" placeholder="blmccavanagh"></input>
                            <p className="bg-white text-black">Connect Facebook</p>
                            <FontAwesomeIcon icon={faArrowRight} />
                            <p className="bg-white text-black">Phone number</p>
                            <input type="text" placeholder="0412 345 678"></input>
                            <p className="bg-white text-black">Change profile photo</p>
                            <img src={profileImage} className="h-10 w-10 rounded-full"/>
                        </div>
                        <br />

                        <h1 className="pMono font-bold">CHART</h1>
                        <br />
                        <div className="grid grid-cols-2 gap-2 bg-purple-500 bg-opacity-90 p-4 rounded-2xl text-black">
                            <p className="bg-white text-black">Birth date</p>
                            <input type="date" value="1992-09-18" className="text-black"></input>
                            <p className="bg-white text-black">Birth time</p>
                            <input type="time" value="16:29"></input>
                            <p className="bg-white text-black">Birth place</p>
                            <input type="text" placeholder="Katy, Texas"></input>
                        </div>
                        <br />

                        <ul className="bg-purple-500 bg-opacity-90 p-4 m-0.5 rounded-2xl">
                            <li><Link className="bg-white text-black rounded p-1">Update Password</Link></li>
                            <br />
                            <li><Link className="bg-white text-black rounded p-1">Logout</Link></li>
                            <br />
                            <li><Link className="bg-white text-black rounded p-1">Delete Account</Link></li>
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
