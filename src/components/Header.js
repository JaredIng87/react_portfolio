import React from 'react';
import '../styles/Header.css';

const pages = [
    {href: "about", pageName: "About"},
    {href: "projects", pageName: "Projects"},
    {href: "contact", pageName: "Contact"},
    {href: "resume", pageName: "Resume"}
];

function Header(props) {

  return (
<div>
      <header className="header">
      <h1>{props.header}</h1>
      </header>
    </div>
  );
}

export default Header;