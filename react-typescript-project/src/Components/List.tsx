import React, { useState } from 'react';
import { PeopleInterface as Props } from '../App';
import { StateChange as StateProp } from '../App';
import './List.css';

interface IProps {
  people: Props['people'];
}
// Passing State
interface HandleState {
  setState: React.Dispatch<React.SetStateAction<StateProp['setState']>>;
}

const List: React.FC<IProps & HandleState> = ({ people, setState }) => {
  // Function to display list Items
  const renderList = (): JSX.Element[] => {
    return people.map((people, index) => (
      <li className='list' key={index}>
        <div className='list-header'>
          <img src={people.url} />
          <h4>{people.name}</h4>
        </div>
        <p>{people.age}</p>
        <p>{people.note}</p>
      </li>
    ));
  };
  return (
    <>
      <ul>{renderList()}</ul>
      <button className='add-btn' onClick={() => setState(true)}>
        Add People
      </button>
    </>
  );
};

export default List;
