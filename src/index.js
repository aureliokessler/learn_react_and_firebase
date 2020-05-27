import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';

function Blog() {
    return (
        <>
            <Login />
        </>
    );
}

ReactDOM.render(
    <Blog />,
    document.getElementById('root')
);