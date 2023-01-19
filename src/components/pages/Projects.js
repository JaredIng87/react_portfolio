import React from 'react';
import './styles/Projects.css';
import NoteTaker from './styles/images/noteTaker.png';
import TechBlog from './styles/images/techBlog.png';
import DailyPlanner from './styles/images/dailyPlanner.png';
import BasicPortfolio from './styles/images/basicPortfolio.png';
import Tacos from './styles/images/tacos.png';
import Coffee from './styles/images/coffee.png';

const pages = [
    {href: "https://salty-forest-89064.herokuapp.com/", pageName: "Note Taker", src: NoteTaker},
    {href: "https://cryptic-basin-25762.herokuapp.com/", pageName: "Tech Blog", src: TechBlog},
    {href: "https://jareding87.github.io/daily-planner/", pageName: "Daily Planner", src:DailyPlanner},
    {href: "https://jareding87.github.io/personal-portfolio/", pageName: "HTML/CSS Portfolio", src: BasicPortfolio},
    {href: "https://sminker0401.github.io/Its-Raining-Tacos/", pageName: "It's Raining Tacos - group project", src: Tacos},
    {href: "https://coffee-cravers.herokuapp.com/", pageName: "Coffee Cravers - group project", src: Coffee}
];

export default function Projects() {
    return (
        <div className='projects'>
            {pages.map(p => (
        <figure>
            
                <a href={p.href}>
                <div className="container">
                <img  className="image" src={p.src} alt={p.pageName}></img>
                    <div className="overlay">{p.pageName}<br></br>{p.repo}</div>
                    </div>
                    </a>
            </figure>
            ))}
        </div>
    );
}