import React from 'react';
import './styles/Projects.css';

const pages = [
    {href: "https://sminker0401.github.io/Its-Raining-Tacos/", pageName: "It's Raining Tacos"},
    {href: "https://salty-forest-89064.herokuapp.com/", pageName: "Note Taker"},
    {href: "contact", pageName: "Contact"},
    {href: "resume", pageName: "Resume"},
    {href: "https://sminker0401.github.io/Its-Raining-Tacos/", pageName: "About"},
    {href: "https://sminker0401.github.io/Its-Raining-Tacos/", pageName: "About"}
];

export default function Projects() {
    return (
        <div className='projects'>
            {pages.map(p => (
        <figure>
                <a href={p.href} target="_blank" rel="noreferrer">
                    <img src="./styles/images/tacos.png" alt={p.pageName}></img>
                    </a>
                    <figcaption>{p.pageName}</figcaption>
            </figure>
            ))}
        </div>
    );
  }