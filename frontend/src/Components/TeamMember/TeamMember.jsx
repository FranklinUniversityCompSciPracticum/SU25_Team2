import React, { useState } from 'react';
import { Avatar } from '@mui/material';

function TeamMember({ name, initials, role }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
        <Avatar 
            className='team-avatars'
            alt={name}
            sx={{ width: 75, height: 75 }} 
            src=""> {initials} 
            </Avatar>
    {isHovered && <div className="blurb">{name} - {role}</div>}
    </div>
  );
}

export default TeamMember;