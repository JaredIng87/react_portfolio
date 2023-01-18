import React from 'react';

function Header(props) {
  return (
<div>
      <header className="header">
      <h2>{props.header}</h2>
      </header>
    </div>
  );
}

export default Header;