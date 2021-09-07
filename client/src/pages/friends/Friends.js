import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import auth from '../../utils/auth';

import Header from '../../components/header/Header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faArrowUp } from '@fortawesome/free-solid-svg-icons';

import chandler from '../../images/chandler.png';
import joey from '../../images/joey.png';
import monica from '../../images/monica.png';
import phoebe from '../../images/phoebe.png';
import ross from '../../images/ross.png';

export default function Friends() {

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
                    <div className="poppins text-center content-center text-white">
                        <h1 className="pMono font-bold text-2xl">Your Friends</h1>
                        <br />
                        <br />
                        <ul>
                            <li>
                                <img src={chandler} className="rounded-full h-16 w-16 mx-auto mb-2" />
                                <Link className="pMono font-bold">Chandler Bing</Link><span className="text-xs pMono font-bold"> @mrscbong</span>
                                <p> <FontAwesomeIcon icon={faSun} /> Gemini <FontAwesomeIcon icon={faMoon} /> Pisces <FontAwesomeIcon icon={faArrowUp} /> Virgo</p>
                            </li>
                            <br />
                            <li>
                                <img src={joey} className="rounded-full h-16 w-16 mx-auto mb-2" />
                                <Link className="pMono font-bold">Joseph Tribbiani</Link><span className="text-xs pMono font-bold"> @howudoin</span>
                                <p> <FontAwesomeIcon icon={faSun} /> Capricorn <FontAwesomeIcon icon={faMoon} /> Leo <FontAwesomeIcon icon={faArrowUp} /> Taurus</p>
                            </li>
                            <br />
                            <li>
                                <img src={monica} className="rounded-full h-16 w-16 mx-auto mb-2" />
                                <Link className="pMono font-bold">Monica Geller</Link><span className="text-xs pMono font-bold"> @ilikethingsclean</span>
                                <p> <FontAwesomeIcon icon={faSun} /> Aries <FontAwesomeIcon icon={faMoon} /> Virgo <FontAwesomeIcon icon={faArrowUp} /> Virgo</p>
                            </li>
                            <br />
                            <li>
                                <img src={phoebe} className="rounded-full h-16 w-16 mx-auto mb-2" />
                                <Link className="pMono font-bold">Phoebe Buffay</Link><span className="text-xs pMono font-bold"> @holdmeclosertonydanza</span>
                                <p> <FontAwesomeIcon icon={faSun} /> Aquarius <FontAwesomeIcon icon={faMoon} /> Cancer <FontAwesomeIcon icon={faArrowUp} /> Aquarius</p>
                            </li>
                            <br />
                            <li>
                                <img src={ross} className="rounded-full h-16 w-16 mx-auto mb-2" />
                                <Link className="pMono font-bold">Ross Geller</Link><span className="text-xs pMono font-bold"> @rossatron</span>
                                <p> <FontAwesomeIcon icon={faSun} /> Capricorn <FontAwesomeIcon icon={faMoon} /> Scorpio <FontAwesomeIcon icon={faArrowUp} /> Cancer</p>
                            </li>
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
