import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../utils/auth';

export default function Navigation() {

    // document.getElementById('nav-toggle').onclick = function () {
    //     document.getElementById("nav-content").classList.toggle("hidden");
    // }

    return (
        <div className="poppins mt-1">
            <div className="block lg:hidden">
                <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="bg-indigo-900 bg-opacity-50 rounded-2xl flex flex-col items-stretch w-auto lg:my-auto lg:mr-1 text-xl text-center transform md:flex-row md:translate-y-0 md:space-x-5 md:items-center md:justify-end md:pr-3 lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
                <Link key="Home" to="/">
                    <button className="p-1 text-white text-right text-xs lg:text-base">
                        home
                    </button>
                </Link>
                <Link key="Chart" to="/chart">
                    <button className="p-1 text-white text-right text-xs lg:text-base">
                        chart
                    </button>
                </Link>
                <Link key="Profile" to="/profile">
                    <button className="p-1 text-white text-right text-xs lg:text-base">
                        profile
                    </button>
                </Link>
                {/* <Link key="weekly forecast" to="/">
                    <button className="p-1 text-white text-right text-xs lg:text-base">
                        weekly forecast
                    </button>
                </Link>
                <Link key="monthly forecast" to="/">
                    <button className="p-1 text-white text-right text-xs lg:text-base">
                        monthly forecast
                    </button>
                </Link> */}
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

{/* <div class="block lg:hidden">
			<button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>

		<div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
			<ul class="list-reset lg:flex justify-end flex-1 items-center">
				<li class="mr-3">
					<a class="inline-block py-2 px-4 text-white no-underline" href="#">Active</a>
				</li>
				<li class="mr-3">
					<a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
				</li>
				<li class="mr-3">
					<a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
				</li>
				<li class="mr-3">
					<a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
				</li>
			</ul>
		</div> */}