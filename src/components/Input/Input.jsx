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
            placeholder='Вкажіть назву  ...'
            autoComplete='off'
            className='input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type='submit' className='btn '>
            Створити рекомендації
          </button>
        </form>
      </div>
    );
  };
  
export default Input;