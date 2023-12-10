import React, { useState } from 'react';
import { useAppContext } from '../../AppContext.jsx';

const SearchBar = ({ onSearch, placeholder = 'Search for books...' }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(searchTerm);
  };

  return (
    <div className="relative rounded-lg shadow-md bg-cover" style={{ backgroundImage: `url("path/to/background_image.jpg")` }}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        className="rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 w-full"
      />
      <span className="absolute top-0 right-0 px-4 py-2 text-gray-500 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
    </div>
  );
};

export default SearchBar;