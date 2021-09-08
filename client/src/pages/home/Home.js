import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import auth from '../../utils/auth';

import './Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faArrowUp, faMercury, faVenus, faMars } from '@fortawesome/free-solid-svg-icons';
import { faSmile, faMeh, faFrown, faSquare } from '@fortawesome/free-regular-svg-icons';

import Header from '../../components/header/Header';
import profileImage from '../../images/profile.png';
import chandler from '../../images/chandler.png';
import janice from '../../images/janice.png';
import joey from '../../images/joey.png';
import monica from '../../images/monica.png';
import phoebe from '../../images/phoebe.png';
import rachel from '../../images/rachel.png';
import richard from '../../images/richard.png';
import ross from '../../images/ross.png';

export default function Home() {

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
                        <h4 className="text-sm">
                            Good evening Bridget! It's Wednesday, September 8th. Today at a glance:
                        </h4>
                        <br />
                        <h1 className="pMono text-2xl font-bold">
                            Almost Touch.
                        </h1>
                        <br />
                        <br />
                        <img src={profileImage} className="rounded-full h-24 w-24 mx-auto" />
                        <br />
                        <h4 className="text-sm">
                            Power in <span className="underline">thinking & creativity</span>, <span className="underline">spirituality</span>, <span className="underline">social life</span>, and <span className="underline">self</span>. Trouble with <span className="underline">routine</span> and <span className="underline">sex & love</span>.
                        </h4>
                        <br />
                        <br />
                        <br />
                        <h3 className="pMono text-base font-bold underline">
                            DAILY UPDATES
                        </h3>
                        <br />
                        <br />
                        <br />
                        <h4 className="text-sm">
                            Through today
                        </h4>
                        {/* <br /> */}
                        <h1 className="pMono text-2xl font-bold">
                            Don't be scared to have expectations.
                        </h1>
                        <br />
                        <h4 className="text-sm">
                            A new friendship is developing into something more intense. Intimacy is a gift that comes with obligations. You can choose how to respond.
                        </h4>
                        <br />
                        <div className="grid grid-cols-2 gap-2 md:w-1/4 mx-auto bg-purple-500 bg-opacity-90 rounded-2xl">
                            <h3>Do</h3>
                            <h3>Don't</h3>
                            <h1 className="pMono font-bold">Kombucha</h1>
                            <h1 className="pMono font-bold">Domino effect</h1>
                            <h1 className="pMono font-bold">Takeout</h1>
                            <h1 className="pMono font-bold">Catastrophizing</h1>
                            <h1 className="pMono font-bold">Cartoons</h1>
                            <h1 className="pMono font-bold">Shut down</h1>
                        </div>
                        <br />
                        <div className="flex justify-center gap-2">
                            <FontAwesomeIcon icon={faSun} />
                            <FontAwesomeIcon icon={faSquare} />
                            <FontAwesomeIcon icon={faMoon} />
                        </div>
                        <br />
                        <br />
                        <h4 className="text-sm">
                            Ice Breaker
                        </h4>
                        <br />
                        <h1 className="pMono text-2xl font-bold">
                            You're more argumentative than a Gemini.
                        </h1>
                        <br />
                        <h4 className="text-base">
                            The signs your friends can beat you at their own game:
                        </h4>
                        <br />
                        <br />
                        <div className="md:w-1/6 md:ml-80">
                            <img src={chandler} className="mx-auto rounded-full h-16 md:h-20 w-16 md:w-20" />
                            <p>Chandler is more skeptical than a Scorpio.</p>
                        </div>
                        <br />
                        <div className="md:w-1/6 md:ml-32">
                            <img src={rachel} className="mx-auto rounded-full h-16 md:h-20 w-16 md:w-20" />
                            <p>Rachel is more sensitive than a Cancer.</p>
                        </div>
                        <br />
                        <div className="md:w-1/6 md:ml-96">
                            <img src={ross} className="mx-auto rounded-full h-16 md:h-20 w-16 md:w-20" />
                            <p>Ross is more hedonistic than a Taurus.</p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <h1 className="pMono text-2xl font-bold">
                            Go for a drive with @howudoin.
                        </h1>
                        <br />
                        <img src={joey} className="mx-auto rounded-full h-20 md:h-28 w-20 md:w-28" />
                        <br />
                        <h4>
                            Stop trying to withdraw from emotional problems. @howudoin won't see you like a human crossword puzzle, even if you are causing drama just for fun. They can remind you to embrace the truth.
                        </h4>
                        <br />
                        <br />
                        <div className="grid grid-cols-4 p-2 gap-2 md:w-1/2 mx-auto bg-purple-500 bg-opacity-90 rounded-2xl">
                            <h3 className="pMono font-bold col-span-2">Learn from Water Suns</h3>
                            <h3 className="pMono font-bold col-span-2">Avoid Earth Venuses</h3>
                            <img src={phoebe} className="mx-auto rounded-full h-10 md:h-16 w-10 md:w-16" />
                            <img src={monica} className="mx-auto rounded-full h-10 md:h-16 w-10 md:w-16" />
                            <img src={janice} className="mx-auto rounded-full h-10 md:h-16 w-10 md:w-16" />
                            <img src={richard} className="mx-auto rounded-full h-10 md:h-16 w-10 md:w-16" />
                        </div>
                        <br />
                        <br />
                        <h4 className="text-sm">
                            How to handle this period
                        </h4>
                        <h1 className="pMono text-2xl font-bold">
                            You have the chance to put yourself first.
                        </h1>
                        <br />
                        <h4 className="text-sm">
                            Your <span className="underline">Venus is in Libra</span>. This means that you have an almost supernatural ability to give without strings attached. It isn't a temporary dedication, it's your inherent kindness. Acknowledge it.
                        </h4>
                        <br />
                        <br />
                        <br />
                        <Link key="Chart" to="/chart">
                            <h3 className="pMono text-base font-bold underline">
                                VIEW YOUR CHART
                            </h3>
                        </Link>
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

        </div >
    )
}
