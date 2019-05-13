import React from 'react';
//import logo from './logo.svg';
import './App.css';

const reasons = [
  { title: 'Top down data flow' },
  { title: 'Shadow dom'},
  { title: 'Declarative, hierarchical, functional' }
];

function App() {
  const first_variable = "Hello React";
  return (
    <div className="App">
      <div>
        <h1>First APP with react</h1>
        <h2>{ first_variable }</h2>
        {reasons.map( (item) =>  { 
          return <div className="title">{item.title}</div>;
         })}
      </div>
    </div>
  );
}

export default App;
