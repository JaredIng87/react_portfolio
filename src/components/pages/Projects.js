import React from 'react';
import './styles/Projects.css';

const pages = [
    {href: "https://salty-forest-89064.herokuapp.com/", pageName: "Note Taker", src: "./styles/images/noteTaker.png"},
    {href: "https://cryptic-basin-25762.herokuapp.com/", pageName: "Tech Blog", src: "./styles/images/self.jpg"},
    {href: "https://jareding87.github.io/daily-planner/", pageName: "Daily Planner", src: "./styles/images/dailyPlanner.png"},
    {href: "https://jareding87.github.io/personal-portfolio/", pageName: "HTML/CSS Portfolio", src: "./styles/images/basicPortfolio.png"},
    {href: "https://sminker0401.github.io/Its-Raining-Tacos/", pageName: "It's Raining Tacos - group project", src: "./styles/images/tacos.png"},
    {href: "https://coffee-cravers.herokuapp.com/", pageName: "Coffee Cravers - group project", src: "./styles/images/self.jpg"}
];

export default function Projects() {
    return (
        <div className='projects'>
            {pages.map(p => (
        <figure>
                <a href={p.href}>
                    <img src={p.src} alt={p.pageName}></img>
                    </a>
                    <figcaption>{p.pageName}</figcaption>
            </figure>
            ))}
        </div>
    );
}