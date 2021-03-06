import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, useHistory } from "react-router";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import auth from '../../utils/auth';
import login from './Login.css';


const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
    const history = useHistory();

    // useEffect(() => {
    //     // checking if user is logged in

    //     if (Auth.loggedIn()) {
    //         history.push('/');

    //         // if yes then redirect to home page
    //     }
    // }, []);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            auth.login(data.login.token)
            history.push('/');
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    // const submitFormEnter = (event) => {
    //     if (event.key === 'Enter') {
    //         handleFormSubmit();
    //     }
    // };


    return (
        <div className="poppins">
            <div className="relative min-h-screen flex ">
                <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                    <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
                        style={{ backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/769/924/837/best-of-space-high-resolution-wallpaper-preview.jpg)" }}>
                        <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
                        <div className="w-full  max-w-md z-10">
                            <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6 pMono">in retrograde</div>
                            <div className="sm:text-sm xl:text-md text-gray-200 font-normal">A fresh new perspective on your daily horoscope, offering you an in-depth, customized reading unique to you, allowing you to make the most of each day.</div>
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
                    <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
                        <div className="max-w-md w-full space-y-8">
                            <div className="text-center">
                                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                                    Welcome Back!
                                </h2>
                                <p className="mt-2 text-sm text-gray-500">Please sign in to your account</p>
                            </div>
                            <form
                                className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
                                <input type="hidden" name="remember" value="true" />
                                <div className="relative">
                                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                                    <input
                                        className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                        type="" placeholder="name@email.com"
                                        name="email"
                                        type="email"
                                        value={formState.email}
                                        onChange={handleChange} />
                                </div>
                                <div className="mt-8 content-center">
                                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                        Password
                                    </label>
                                    <input
                                        className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                                        name="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        value={formState.password}
                                        onChange={handleChange} />
                                </div>
                                {/* <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember_me" name="remember_me" type="checkbox"
                                            className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <Link to="/" className="text-indigo-400 hover:text-blue-500">
                                            Forgot your password?
                                        </Link>
                                    </div>
                                </div> */}
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                                    >
                                        Sign in
                                    </button>
                                </div>
                                <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                                    <span>Don't have an account?</span>
                                    <Link to="/signup"
                                        className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign
                                        up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            )

            {error && (
                <div>
                    {error.message}
                </div>
            )}
        </div>
    );
};

const AuthRoute = props => {
    const { isAuthUser, type } = props;
    if (type === "guest" && isAuthUser) return <Redirect to="/home" />;
    else if (type === "private" && !isAuthUser) return <Redirect to="/" />;

    return <Route {...props} />;
};

const mapStateToProps = ({ isAuthUser }) => ({
    isAuthUser
});

export default Login;

export const ConnectAuthToStore = connect(mapStateToProps)(AuthRoute);