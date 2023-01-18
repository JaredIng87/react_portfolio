import React from 'react';
import '../styles/NavTabs.css';

const pages = [
    {href: "about", pageName: "About", header: "About Me"},
    {href: "projects", pageName: "Projects", header: "Projects"},
    {href: "contact", pageName: "Contact", header: "Contact Me"},
    {href: "resume", pageName: "Resume", header: "Resume"}
];

function NavTabs({ currentPage, handlePageChange }) {

  return (
    <ul className="nav nav-tabs">
    {pages.map(p => (
        <li className="nav-item">
        <a
          href={`#${p.href}`}
          onClick={() => handlePageChange(p.pageName)}
          className={currentPage === p.pageName ? 'nav-link active' : 'nav-link'}
        >
          {p.pageName}
        </a>
      </li>
    ))
    }
    </ul>
  );
}

export default NavTabs;