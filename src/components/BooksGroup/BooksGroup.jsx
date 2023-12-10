//import React from 'react';
import BookCard from '../BookCard/BookCard.jsx'; 

const BooksGroup = ({ booksArray }) => {
    const handleCardClick = (bookInfo) => {
        // Do something with bookInfo, e.g., show details in the parent component
        console.log('Book clicked:', bookInfo);
      };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {booksArray.map((book) => (
        <BookCard key={book.id} title={book.title} author={book.author} coverUrl={book.coverUrl} onCardClick={handleCardClick} />
      ))}
    </div>
  );
};

export default BooksGroup;