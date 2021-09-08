import React, { useState } from 'react';
import './List.css';
import { PeopleInterface as Props } from '../App';
import { StateChange as StateProps } from '../App';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}
//Interface for handling state
interface HandleState {
  setState: React.Dispatch<React.SetStateAction<StateProps['setState']>>;
}

const AddToList: React.FC<IProps & HandleState> = ({
  people,
  setPeople,
  setState,
}) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    url: '',
    note: '',
  });
  // Function to detect input values
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  // Function to add New People
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note,
      },
    ]);
    setInput({
      name: '',
      age: '',
      url: '',
      note: '',
    });
    setState(false);
  };
  return (
    <div className='add-to-list-container'>
      <h2> Add People</h2>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <input
          type='text'
          placeholder='Enter Name'
          value={input.name}
          name='name'
          onChange={handleChange}
          required
        />
        <input
          type='number'
          placeholder='Enter Age'
          value={input.age}
          name='age'
          onChange={handleChange}
          required
        />
        <input
          type='text'
          placeholder='Enter image Url'
          value={input.url}
          name='url'
          onChange={handleChange}
          required
        />
        <textarea
          placeholder='Enter Note'
          value={input.note}
          name='note'
          onChange={handleChange}
          required
        />
        <button className='add-btn' type='submit'>
          Add To List
        </button>
      </form>
      <button className='cancel-btn' onClick={() => setState(false)}>
        x
      </button>
    </div>
  );
};

export default AddToList;
