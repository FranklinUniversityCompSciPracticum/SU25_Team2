import React, {useState} from 'react';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Popular from '../Components/Popular/Popular';

export default function Shop() {

    //use state to keep track of if the newsletter has been closed
    const [showNewsletter, setShowNewsletter] = useState(true);
    const handleClose = () => {
        setShowNewsletter(false);
    };



    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Welcome to the home Shop Page</h1>
            <p>This our main page.</p>
            <Popular />
            <hr />
            {showNewsletter && <NewsLetter onClose={handleClose} />}
        </div>
    );
}