import React, { useState } from 'react';
import './App.css';
import { AddToList } from './components/AddToList';
import { List } from './components/List';

// https://www.youtube.com/watch?v=jrKcJxF0lAU

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const App = () => {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'John Smith',
      url: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ-ypOtVySoeuZY3nqdydhRy-9xfVxN4SaYKj4iisCoXPiPzSOmBS-HB7R80sB4',
      age: 27,
      note: 'Loves to code',
    },
  ]);

  return (
    <div>
      <h1>Guest List</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
};

export default App;
