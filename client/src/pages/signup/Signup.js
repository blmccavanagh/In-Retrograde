import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import { DateTime } from 'luxon';

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    dateAndTime: '',
    timezone: '',
    placeOfBirth: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    const payload = { ...formState };
    // parse dateAndTime into dob and time Of Birth
    const datetime = DateTime.fromISO(payload.dateAndTime);

    // DD-MM-YYYY
    const dob = datetime.toFormat('dd-LL-yyyy');
    const timeOfBirth = datetime.toFormat('HH:mm');

    console.log({
      ...payload,
      dob,
      timeOfBirth

    })



    try {
      const { data } = await addUser({
        variables: {
          ...payload,
          dob,
          timeOfBirth

        },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="bg-white">
      <div className="flex min-h-screen bg-white">

        <div className="w-1/2 bg-cover md:block hidden" style={{ backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/769/924/837/best-of-space-high-resolution-wallpaper-preview.jpg)" }}></div>


        <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">

          <div className="text-left p-0 font-sans">

            <h1 className=" text-gray-800 text-3xl font-medium">Create an account for free</h1>
            <h3 className="p-1 text-gray-700">Free forever. No payment needed.</h3>
          </div>
          <form onSubmit={handleFormSubmit} className="p-0">
            <div className="mt-5">
              <label
                className="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                for="name">
                Name
              </label>
              <input
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                placeholder="Name"
                id="name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange} />
            </div>
            <div className="mt-5">
              <label
                className="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                for="email">
                Email
              </label>
              <input
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                placeholder="Email"
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            <div className="mt-5">
              <label
                className="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                for="dateAndTime">
                Date & Time of Birth
              </label>
              <input
                id="date-and-time"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                placeholder="Date and Time of Birth"
                id="dateAndTime"
                name="dateAndTime"
                type="datetime-local"
                value={formState.dateAndTime}
                onChange={handleChange}
              />
            </div>
            <div className="mt-5">
              <label
                className="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                for="timezone">
                Timezone
              </label>
              <input
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                placeholder="Timezone (eg -5, +4 etc)"
                id="timezone"
                name="timezone"
                type="number"
                value={formState.timezone}
                onChange={handleChange}
              />
            </div>
            <div className="mt-5">
              <label
                className="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                for="placeOfBirth">
                Name
              </label>
              <input
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                placeholder="Place of Birth"
                id="placeOfBirth"
                name="placeOfBirth"
                type="text"
                value={formState.placeOfBirth}
                onChange={handleChange}
              />
            </div>
            <div className="mt-5">
              <label
                className="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                for="password">
                Password
              </label>
              <input
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
            </div>

            <div className="mt-10">
              <button
                className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                type="submit">
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

export default Signup;