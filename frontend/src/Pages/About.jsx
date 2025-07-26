import {useState} from 'react';
import './CSS/About.css'
import Stack from '@mui/material/Stack';
import TeamMember from '../Components/TeamMember/TeamMember';
import nDoran from '../Components/Assets/ndoran.png';
import spencer from '../Components/Assets/spencer.jpg';
import antonia from '../Components/Assets/antonia.png';
import ayub from '../Components/Assets/ayub.png';
import caseImage from '../Components/Assets/caseImage.png';
import john from '../Components/Assets/john_profile.jpg';

export default function About() {

    const [activeMember, setActiveMember] = useState(null);

    const aboutBlurb1 = `We are a team of computer science students brought together by a shared passion for building practical, user-focused web applications. As part of our practicum project, we designed and developed a fully functional retail website using the MERN stack (MongoDB, Express.js, React, and Node.js). The site includes a complete registration and login system, a dynamic shopping cart, and an admin panel that allows store managers to easily add, edit, and manage product listings.`
    const aboutBlurb2 = `Throughout the project, we emphasized clean design, responsive layouts, and intuitive navigation to deliver a modern storefront experience. On the frontend, we used React along with Material UI (MUI) to ensure a polished and accessible interface. On the backend, we implemented robust APIs and connected them to MongoDB for persistent data storage, supporting everything from user authentication to real-time cart updates.`
    const aboutBlurb3 = `We collaborated closely using Git and GitHub for version control, learning not just how to build full-stack applications, but also how to work as an effective development team. This project helped us refine our technical skills, deepen our understanding of real-world web development workflows, and create something we're genuinely proud to share.`
    const johnBlurb = "Lead Developer with 3+ years of experience building scalable web applications. I specialize in React, Node.js, and MongoDB. When I'm not coding, you'll find me hiking or playing golf. Excited to give business owners and artisans a global reach for their products."

    return (
        <div className='container'>
            <div className='header'>
                <h1>About Us</h1>
            </div>
            <div className='body'>
                <h2> Our Story </h2>
                <p>{aboutBlurb1}</p>
                <p>{aboutBlurb2}</p>
                <p>{aboutBlurb3}</p>
            </div>
            <div 
                className='team'
                onMouseLeave = {() => setActiveMember(null)}
            >
                <div className='team-header'>
                    <h2> Meet the Team </h2>
                </div>
                <Stack className="team-stack" direction="row" spacing={2}>
                    <TeamMember 
                        name="John Schaefer"
                        initials="JS"
                        memberBlurb={johnBlurb}
                        role="Lead Developer"
                        imgUrl={john}
                        setActiveMember={setActiveMember}
                        email="schaef50@email.franklin.edu"
                    />
                    <TeamMember
                        name="Ayub Ali"
                        initials="AA"
                        memberBlurb="Overseeing the development process & responsible for building and maintaining the core functionality of the application"
                        role="Team Manager/Lead Developer"
                        imgUrl= {ayub}
                        setActiveMember={setActiveMember}
                        email="alia14@email.franklin.edu"
                    />
                    <TeamMember
                        name="Spencer Teillon"
                        initials="ST"
                        memberBlurb="As an Assistant Frontend Developer, I contributed to key UI components including a dynamic newsletter popup, about page, and breadcrumb navigation. I also built the registration interface with robust input validation to ensure a smooth and secure user experience."
                        role="Assistant Developer"
                        imgUrl={spencer}
                        setActiveMember={setActiveMember}
                        email="teillo01@email.franklin.edu"
                    />
                    <TeamMember
                        name="Antonia Kelly-Caswell"
                        initials="AC"
                        memberBlurb="As a Frontend Developer, I worked on a range of features with a focus on presenting clear, accessible product information. My role involved implementing responsive layouts, refining user interactions, and ensuring data was displayed accurately across components."
                        role="Frontend Developer"
                        imgUrl= {antonia}
                        setActiveMember={setActiveMember}
                        email="kellyc10@email.franklin.edu"
                    />
                    <TeamMember
                        name="Nick Doran"
                        initials="ND"
                        memberBlurb="Life long problem solver"
                        role="Full Stack Developer"
                        imgUrl={nDoran}
                        setActiveMember={setActiveMember}
                        email="doran13@email.franklin.edu"
                    />
                    <TeamMember
                        name="Case Starcher"
                        initials="CS"
                        role="Assistant Developer"
                        imgUrl= {caseImage}
                        memberBlurb="Did a lot of detail work with links and formatting along with adding descriptions to clothing and gave the kids clothing their category"
                        setActiveMember={setActiveMember}
                        email="starch20@email.franklin.edu"
                    />
                </Stack>

                {activeMember && (
                    <div className="blurb-container">
                        <div className='blurb-title'>
                            {activeMember.name} - {activeMember.role}
                        </div>
                        <div className='blurb-text'>
                            {activeMember.memberBlurb}
                        </div>
                        <div className='blurb-email'>
                            Contact: {activeMember.email}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}