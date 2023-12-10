import React from 'react';
import BookCard from '../BookCard/BookCard.jsx'; 
import { useAppContext } from '../../AppContext.jsx';

const BooksGroup = ({ booksArray }) => {
  const { searchTerm, filters } = useAppContext();

  // Function to check if a book matches the search term and filters
  const isBookMatching = (book) => {
    // Check if the book title or author includes the search term
    const matchesSearchTerm =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    // Check if the book's genre matches any applied filter
    const matchesFilter =
      filters.length === 0 || filters.includes(book.genre);

    // Return true if the book matches both search term and filter
    return matchesSearchTerm && matchesFilter;
  };

  // Apply the filter and create a new array with matching books
  const filteredBooks = booksArray.filter(isBookMatching);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {filteredBooks.map((book) => (
        <BookCard key={book.id} title={book.title} author={book.author} coverUrl={book.coverUrl} />
      ))}
    </div>
  );
};

export default BooksGroup;
