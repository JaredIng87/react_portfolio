import React from 'react';
import { Popover, Text } from "@nextui-org/react";
import './styles/Projects.css';
import NoteTaker from './styles/images/noteTaker.png';
import TechBlog from './styles/images/techBlog.png';
import DailyPlanner from './styles/images/dailyPlanner.png';
import BasicPortfolio from './styles/images/basicPortfolio.png';
import Tacos from './styles/images/tacos.png';
import Coffee from './styles/images/coffee.png';

const projects = [
    {url: "https://salty-forest-89064.herokuapp.com/", pageName: "Note Taker", repo: "https://github.com/JaredIng87/note-taker", src: NoteTaker},
    {url: "https://cryptic-basin-25762.herokuapp.com/", pageName: "Tech Blog", repo: "https://github.com/JaredIng87/tech_blog", src: TechBlog},
    {url: "https://jareding87.github.io/daily-planner/", pageName: "Daily Planner", repo: "https://github.com/JaredIng87/daily-planner", src:DailyPlanner},
    {url: "https://jareding87.github.io/personal-portfolio/", pageName: "HTML/CSS Portfolio", repo: "https://github.com/JaredIng87/personal-portfolio", src: BasicPortfolio},
    {url: "https://sminker0401.github.io/Its-Raining-Tacos/", pageName: "It's Raining Tacos - group project", repo: "https://github.com/Sminker0401/Its-Raining-Tacos", src: Tacos},
    {url: "https://coffee-cravers.herokuapp.com/", pageName: "Coffee Cravers - group project", repo: "https://github.com/marchocobar/Coffee-Shop", src: Coffee}
];

export default function Projects() {
    return (
        <div className='projects'>
            {projects.map(p => (
        <figure>
               <Popover offset= {-75}>
      <Popover.Trigger>
                <div className="container">
                <img  className="image" src={p.src} alt={p.pageName}></img>
                    <div className="overlay">{p.pageName}</div>
                    </div>
                    </Popover.Trigger>
      <Popover.Content css={{ background: '#3a3a3a', pl: '$20', pr: '$20'}}>
        <Text className='popoverText' css={{ p: "$10", color: "$white", textAlign: "$center" }}>{p.pageName}
        <br></br>
        <a href={p.url} target="_blank" rel="noreferrer" style={{color: "white"}}>Visit Here</a>
        <br></br>
        <a href={p.repo} target="_blank" rel="noreferrer" style={{color: "white"}}>Github Repo</a></Text>
      </Popover.Content>
    </Popover>
            </figure>
            ))}
        </div>
    );
}