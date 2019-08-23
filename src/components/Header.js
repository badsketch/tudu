import React from 'react';
import './Header.css';
import Title from 'components/Title';
import UserCreate from 'containers/UserCreate';

export default function Header() {
    return (
        <div id="header">
            <Title />
            <UserCreate />
        </div>
    )
}