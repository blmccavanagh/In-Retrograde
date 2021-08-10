import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from '../../components/header/Header';

export default function Home() {
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
