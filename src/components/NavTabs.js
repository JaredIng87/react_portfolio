import React from 'react';

const pages = [
    {href: "home", pageName: "Home"},
    {href: "about", pageName: "About"},
    {href: "projects", pageName: "Projects"},
    {href: "contact", pageName: "Contact"},
    {href: "resume", pageName: "Resume"}
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