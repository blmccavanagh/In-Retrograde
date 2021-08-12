import React, {useEffect} from 'react';
import { Link , useHistory } from 'react-router-dom';
import auth from '../../utils/auth';

import './Home.css';
import Header from '../../components/header/Header';

export default function Home() {

    const history = useHistory();
    // useEffect
    /// check if there is a token in local storage
    // if no redirect the user to login page
    useEffect(() => {
        auth.loggedIn() || history.push('/login')

        // if token is not null (refer to class activity + AuthService)
        // verify token, ie sending the token to a backend endpoint to verify, // decode token
        // if you can't decode the token it's not valid, direct the user back to the login page

        // if not valid
        
        //if(){
        // }


    }, [history]);

    return (
        <div className="bg-dark-img">
            <div className="bg-light-img">
                <div>
                    <Header />
                </div>
            </div>
        </div>
    )
}
