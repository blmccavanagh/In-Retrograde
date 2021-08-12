import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../utils/auth';

export default function Navigation() {
    return (
        <div className="poppins ">
            <div className="bg-indigo-900 bg-opacity-50 rounded-2xl flex flex-col items-stretch w-auto my-auto mr-1 lg:m-0 text-xl text-center transform pt-1 md:flex-row md:translate-y-0 md:space-x-5 md:items-center md:justify-end md:pr-3">
                <Link key="weekly horoscope" to="/">
                    <button className="p-1 text-white text-right text-xs lg:text-base">
                        weekly horoscope
                    </button>
                </Link>
                <Link key="Logout" to="/">
                    <button
                    className="p-1 text-white text-right text-xs lg:text-base"
                    onClick={auth.logout}>
                        logout
                    </button>
                </Link>
            </div>
        </div>
    )
}