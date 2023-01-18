import React from 'react';
import '../styles/Header.css';

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