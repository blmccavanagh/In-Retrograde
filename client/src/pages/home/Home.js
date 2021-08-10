import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';

export default function Home() {
    return (
        <div>
            <div>
                { Header }
                { Navigation }
            </div>
        </div>
    )
}
