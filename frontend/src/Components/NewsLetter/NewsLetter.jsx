import React from 'react'
import './NewsLetter.css'
import CloseIcon from '@mui/icons-material/Close';

const NewsLetter = ({ onClose }) => {
    return (
        <div className='newsletter'>
            <div className="background-white">
                <div className="background-trans">
                <button className="close-button" onClick={onClose}>
                    <CloseIcon className='close-icon'/>
                </button>
                <h1>Get Exclusive Offers On Your Email</h1>
                <p>Subscribe and Save!</p>
                    <div className='submit'>
                        <input id="email" autoComplete="true" type="email" placeholder='Your email ID' className='submit'/>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter