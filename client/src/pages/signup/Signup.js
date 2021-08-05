import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <div className="bg-white">
            <div className="flex min-h-screen bg-white">

                <div className="w-1/2 bg-cover md:block hidden" style={{backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/769/924/837/best-of-space-high-resolution-wallpaper-preview.jpg)"}}></div>


                <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">

                    <div className="text-left p-0 font-sans">

                        <h1 className=" text-gray-800 text-3xl font-medium">Create an account for free</h1>
                        <h3 className="p-1 text-gray-700">Free forever. No payment needed.</h3>
                    </div>
                    <form action="#" className="p-0">
                        <div className="mt-5">
                            <input type="text" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Email" />
                        </div>
                        <div className="mt-5">
                            <input type="text" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Username" />
                        </div>
                        <div className="mt-5">
                            <input type="password" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  " placeholder="Password" />
                        </div>

                        <div className="mt-6 block p-5 text-sm md:font-sans text-xs text-gray-800">
                            <input type="checkbox" className="inline-block border-0  " />
                            <span display="inline" className="">By creating an account you are agreeing to our
                                <a className="" href="/s/terms" target="_blank" data-test="Link">
                                    <span className="underline ">Terms and Conditions</span> </a> and
                                <a className="" href="/s/privacy" target="_blank" data-test="Link">
                                    <span className="underline">Privacy Policy</span> </a>
                            </span>
                        </div>

                        <div className="mt-10">
                            <button type="submit"
                                className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                Sign up
                            </button>
                        </div>
                    </form>
                    <Link to="/" data-test="Link"><span className="block  p-5 text-center text-gray-800  text-xs ">Already have an account?</span></Link>
                </div>


            </div>
        </div>
    )
}