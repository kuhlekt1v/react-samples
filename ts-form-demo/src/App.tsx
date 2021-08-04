import React, { useState } from 'react';
import { List } from './components/List';
import './App.css';

// https://www.youtube.com/watch?v=jrKcJxF0lAU
// Stopped at: 31:09

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const App = () => {
  const [people, setPeople] = useState<IState['people']>([]);

  return (
    <div>
      <h1>Guest List</h1>
      <List people={people} />
    </div>
  );
};

export default App;
