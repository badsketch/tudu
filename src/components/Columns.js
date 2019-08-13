import React from 'react';
import './Columns.css';

function Columns({ children }) {
    return (
        <div id="columns">
            {children}
        </div>
    )
}

export default Columns;