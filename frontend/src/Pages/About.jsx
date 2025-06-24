import React, {useState} from 'react';
import './CSS/About.css'
import Stack from '@mui/material/Stack';
import TeamMember from '../Components/TeamMember/TeamMember';

export default function About() {

    const [activeMember, setActiveMember] = useState(null);

    const loremText ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod et quasi vitae temporibus placeat? Architecto similique repellendus ad pariatur expedita nihil laudantium ratione. Ab natus quidem sunt necessitatibus. Dolor, sunt!"

    return (
        <div className='container'>
            <div className='header'>
                <h1>About Us</h1>
            </div>
            <div className='body'>
                <h2> Our Story </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, accusamus, aliquid iusto fuga aspernatur illo animi id minus deserunt harum cupiditate totam modi ea reprehenderit! Animi hic fugit corporis assumenda!Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui quam sunt a fugit neque quos, id dolorum magnam atque, quis repellat eum magni illo iste! Aliquid at mollitia corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam laudantium minima doloribus blanditiis voluptas voluptatem eius laborum sed, vero, vitae dolores in quisquam labore odit autem eum, mollitia enim?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad nulla natus maxime praesentium nostrum accusamus consequuntur porro eveniet ea vel repellat, maiores molestias labore pariatur eaque officia eos quo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis animi officiis dolor commodi fugit, pariatur eveniet accusamus sequi quis facilis inventore excepturi quam deserunt harum velit consectetur magni quasi nisi!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus temporibus dolorum, maxime eos iure eius atque fugiat optio placeat beatae hic repellendus iusto iste quis voluptatem at soluta provident consectetur?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quod expedita, neque similique debitis omnis reprehenderit ex reiciendis odio? Odio, nesciunt eaque totam non consequuntur minus eos nobis officiis nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui quam sunt a fugit neque quos, id dolorum magnam atque, quis repellat eum magni illo iste! Aliquid at mollitia corrupti.</p>
            </div>
            <div className='team'>
                <div className='team-header'>
                    <h2> Meet the Team </h2>
                </div>
                <Stack className="team-stack" direction="row" spacing={2}>
                    <TeamMember 
                        name="John Schaefer"
                        initials="JS"
                        memberBlurb={loremText}
                        role="Lead Developer"
                        setActiveMember={setActiveMember}
                    />
                    <TeamMember
                        name="Ayub Ali"
                        initials="AA"
                        memberBlurb={loremText}
                        role="Product Manager"
                        setActiveMember={setActiveMember}
                    />
                    <TeamMember
                        name="Spencer Teillon"
                        initials="ST"
                        memberBlurb={loremText}
                        role="UX Designer"
                        setActiveMember={setActiveMember}
                    />
                    <TeamMember
                        name="Antonia Kelly-Caswell"
                        initials="AC"
                        memberBlurb={loremText}
                        role="Backend Engineer"
                        setActiveMember={setActiveMember}
                    />
                    <TeamMember
                        name="Nick Doran"
                        initials="ND"
                        memberBlurb={loremText}
                        role="Marketing Lead"
                        setActiveMember={setActiveMember}
                    />
                    <TeamMember
                        name="Case Starcher"
                        initials="CS"
                        role="QA Specialist"
                        memberBlurb={loremText}
                        setActiveMember={setActiveMember}
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
                    </div>
                )}
            </div>
        </div>
    );
}