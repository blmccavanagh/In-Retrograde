import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import auth from '../../utils/auth';

import './Home.css';
import Header from '../../components/header/Header';
import profileImage from '../../images/profile.png';

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
                            Good evening Bridget! It's Monday, August 16th. Today at a glance:
                        </h4>
                        <br />
                        <h1 className="pMono text-2xl font-bold">
                            Almost Touch.
                        </h1>
                        <br />
                        <br />
                        <img src={profileImage} className="rounded-full h-24 w-24 mx-auto"/>
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
                        <br />
                        <br />
                        <h4 className="text-sm">
                            How to handle this period
                        </h4>
                        {/* <br /> */}
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
