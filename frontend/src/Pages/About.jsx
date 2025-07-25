import React, {useState} from 'react';
import './CSS/About.css'
import Stack from '@mui/material/Stack';
import TeamMember from '../Components/TeamMember/TeamMember';
import nDoran from '../Components/Assets/ndoran.png';
import spencer from '../Components/Assets/spencer.jpg';
import antonia from '../Components/Assets/antonia.png';
import ayub from '../Components/Assets/ayub.png';
import caseImage from '../Components/Assets/caseImage.png';

export default function About() {

    const [activeMember, setActiveMember] = useState(null);

    const aboutBlurb1 = `At Paradise, we believe that clothing should be more than just something you wear - it should be an invitation to explore, escape, and express yourself. Our brand is rooted in the textures, colors, and energy of the natural world, with each collection drawing from tropical landscapes, remote wilderness, and the laid-back rhythm of outdoor life. From lush island greens to sun-bleached sands, every piece we design is meant to capture the feeling of stepping into someplace new - somewhere free.`
    const aboutBlurb2 = `Our mission is to bring that spirit of exploration into everyday wear. Whether you're trekking a coastal trail, lounging by the water, or navigating your day-to-day in the city, Paradise offers clothing that's comfortable, durable, and unmistakably bold. We blend natural tones with vibrant prints, relaxed silhouettes with thoughtful detail, creating a style that's equal parts wild and wearable.`
    const aboutBlurb3 = `Founded by a small team of student designers with a shared love for nature and fashion, Paradise was born out of a classroom project that quickly turned into something bigger. What started as a creative exercise has grown into a fully realized brand that celebrates the connection between people and the environments that inspire them. We value sustainability, individuality, and the belief that everyone deserves to feel good in what they wear - and where it takes them.`
    const loremText ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod et quasi vitae temporibus placeat? Architecto similique repellendus ad pariatur expedita nihil laudantium ratione. Ab natus quidem sunt necessitatibus. Dolor, sunt!"

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
                        memberBlurb={loremText}
                        role="Lead Developer"
                        imgUrl="null"
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
                        memberBlurb={loremText}
                        role="Assistant Developer"
                        imgUrl={spencer}
                        setActiveMember={setActiveMember}
                        email="teillo01@email.franklin.edu"
                    />
                    <TeamMember
                        name="Antonia Kelly-Caswell"
                        initials="AC"
                        memberBlurb={loremText}
                        role="Frontend Developer"
                        imgUrl= {antonia}
                        setActiveMember={setActiveMember}
                        email="kellyc10@email.franklin.edu"
                    />
                    <TeamMember
                        name="Nick Doran"
                        initials="ND"
                        memberBlurb="Life long problem solver"
                        role="Full Stack Software Developer"
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