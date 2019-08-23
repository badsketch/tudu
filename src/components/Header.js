import React, { useState } from 'react';
import './Header.css';
import Title from 'components/Title';
import UserCreate from 'containers/UserCreate';
import Filter from 'containers/Filter';

export default function Header() {

    return (
        <div id="header">
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column'
            }}>
                <Title />
                <UserCreate />
            </div>
                <Filter />
        </div>
    )
}

