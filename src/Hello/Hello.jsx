import React from 'react';

const Hello = ({ name, big, onHello, onBye }) => {
  return (
    <div>
      {big ? <h1>안녕하세요, {name}!</h1> : <h2>안녕하세요, {name}!</h2>}
      <div>
        <button onClick={onHello}>Hello</button>
        <button onClick={onBye}>Bye</button>
      </div>
    </div>
  )
};

export default Hello;