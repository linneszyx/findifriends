import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import 'tachyons';
import {people} from './people';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Card id={people[0].id} name={people[0].name} email={people[0].email} />
      <Card id={people[1].id} name={people[1].name} email={people[1].email} />
      <Card id={people[2].id} name={people[2].name} email={people[2].email} />
      <Card id={people[3].id} name={people[3].name} email={people[3].email} />
      <Card id={people[4].id} name={people[4].name} email={people[4].email} />
      <Card id={people[5].id} name={people[5].name} email={people[5].email} />
      <Card id={people[6].id} name={people[6].name} email={people[6].email} />
      <Card id={people[7].id} name={people[7].name} email={people[7].email} />
      <Card id={people[8].id} name={people[8].name} email={people[8].email} />
      <Card id={people[9].id} name={people[9].name} email={people[9].email} />
    </div>
  </React.StrictMode>
);
