import React from 'react';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Popular from '../Components/Popular/Popular';

export default function Shop() {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Welcome to the home Shop Page</h1>
            <p>This our main page.</p>
            <Popular />
            <hr />
            <NewsLetter/>
        </div>
    );
}