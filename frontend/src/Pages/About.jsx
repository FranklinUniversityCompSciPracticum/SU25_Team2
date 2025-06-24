import React from 'react';
import './CSS/About.css'
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';

export default function About() {
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
                <h2> Meet the Team </h2>
                <Stack direction="row" spacing={2}>
                    <Avatar 
                        alt="John Schaefer" 
                        sx={{ width: 75, height: 75 }} 
                        src=""> JS </Avatar>
                    <Avatar 
                        alt="Ayub Ali" 
                        sx={{ width: 75, height: 75 }} 
                        src=""> AA </Avatar>
                    <Avatar 
                        alt="Spencer Teillon" 
                        sx={{ width: 75, height: 75 }} 
                        src=""> ST </Avatar>
                    <Avatar 
                        alt="Antonia Kelly-Caswell" 
                        sx={{ width: 75, height: 75 }} 
                        src=""> AC </Avatar>
                    <Avatar 
                        alt="Nick Doran" 
                        sx={{ width: 75, height: 75 }} 
                        src=""> ND </Avatar>
                    <Avatar 
                        alt="Case Starcher"
                        sx={{ width: 75, height: 75 }} 
                        src=""> CS </Avatar>
                </Stack>
            </div>
        </div>
    );
}