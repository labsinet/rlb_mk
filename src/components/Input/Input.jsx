import "./Input.css"

import React from 'react';
import { useState } from 'react';

const Input = ({ searchBooks }) => {
    const [search, setSearch] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      searchBooks(search);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='type here...'
            autoComplete='off'
            className='input'
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type='submit' className='btn '>
            search
          </button>
        </form>
      </div>
    );
  };
  
export default Input;