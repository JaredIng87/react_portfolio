import React from 'react';

export default function PageComponent(props) {
  return (
    <div>
      <h1>{props.header}</h1>
      <p>{props.content}</p>
    </div>
  );
}

