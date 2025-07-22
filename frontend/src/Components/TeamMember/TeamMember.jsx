import React from 'react';
import { Avatar } from '@mui/material';

function TeamMember({ name, initials, role, setActiveMember, memberBlurb, imgUrl, email }) {

    const handleMouseEnter = () => {
        setActiveMember({ name, role, memberBlurb, email});
    };

    return (
        <div
            className='avatar-expand'
            onMouseEnter={handleMouseEnter}
        >
            <Avatar 
                className='team-avatars'
                alt={name}
                sx={{ width: 75, height: 75 }} 
                src={imgUrl}> {initials} 
            </Avatar>
        </div>
  );
}

export default TeamMember;