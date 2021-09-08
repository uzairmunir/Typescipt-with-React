import React, { useState } from 'react';
import List from './Components/List';
import './App.css';
import AddToList from './Components/AddToList';

export interface PeopleInterface {
  people: {
    name: string;
    age: number;
    url: string;
    note: string;
  }[];
}
export interface StateChange {
  setState: boolean;
}

const App = () => {
  const [people, setPeople] = useState<PeopleInterface['people']>([
    {
      name: 'Uzair',
      age: 20,
      url: 'https://scontent.flhe7-1.fna.fbcdn.net/v/t1.6435-9/43284959_734990710186974_1220858975172427776_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=qdYuqLGsL20AX9Rh-CK&tn=n9wlmd6ZFEjZGGzB&_nc_ht=scontent.flhe7-1.fna&oh=f4043cb2a300e1d4a72d098503354689&oe=615EE92E',
      note: 'Software Engineer',
    },
  ]);
  const [state, setState] = useState<StateChange['setState']>(false);
  console.log(state);

  return (
    <div className='App'>
      <h1>People Invited My Party</h1>
      <List people={people} setState={setState} />
      {state ? (
        <AddToList people={people} setPeople={setPeople} setState={setState} />
      ) : null}
    </div>
  );
};

export default App;
