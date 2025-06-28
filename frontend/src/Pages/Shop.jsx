import React, {useState} from 'react';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Popular from '../Components/Popular/Popular';
import NewCollections from '../Components/NewCollections/NewCollections'
import Hero from '../Components/Hero/Hero';

export default function Shop() {

    //use state to keep track of if the newsletter has been closed
    const [showNewsletter, setShowNewsletter] = useState(true);
    const handleClose = () => {
        setShowNewsletter(false);
    };



    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <Hero />
            <div id="popular">
                <Popular />
            </div>
            <div id="new-collections">
                <NewCollections />
            </div>
            <hr />
            {showNewsletter && <NewsLetter onClose={handleClose} />}
        </div>
    );
}