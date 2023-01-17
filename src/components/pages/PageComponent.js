import React from 'react';
import './styles/Header.css';
import './styles/Section.css';

export default function PageComponent(props) {
  return (
    <div>
      <header className="header">
      <h1>{props.header}</h1>
      </header>
      <section className="section">
      {props.content}
      </section>
    </div>
  );
}

