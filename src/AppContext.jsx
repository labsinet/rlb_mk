import { createContext, useContext, useState } from 'react';

const AppContext = createContext({
  minLength: 5, // Default minimum length
  maxLength: 50, // Default maximum length
  currentLength: 0, // Current length
});

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState([]);
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);

  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  const addFilter = (filter) => {
    setFilters((prevFilters) => [...prevFilters, filter]);
  };

  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  const editBook = (bookId, updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === bookId ? updatedBook : book))
    );
  };

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        updateSearchTerm,
        filters,
        addFilter,
        books,
        addBook,
        editBook,
        users,
        addUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
