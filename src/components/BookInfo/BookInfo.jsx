import React from 'react';

const BookInfo = ({ title, author, tags,published, pages, rating }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">Автор: {author}</p>
      <p className="text-gray-600 mb-4">Жанр: {tags}</p>
      <p className="text-gray-600 mb-4">Рік видання: {published}</p>
      <p className="text-gray-600 mb-4">Сторінок: {pages}</p>
      <p className="text-gray-600 mb-4">Рейтинг: {rating}</p>
    </div>
  );
};

export default BookInfo;