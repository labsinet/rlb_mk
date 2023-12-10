import React from 'react';

const BookInfo = ({ title, author }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{author}</p>
      
    </div>
  );
};

export default BookInfo;