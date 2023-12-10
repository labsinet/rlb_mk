import "./Home.css"

import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar.jsx'
//import Input from '../Input/Input.jsx'
//import BookList from '../BookList/BookList.jsx'
import BooksGroup from "../BooksGroup/BooksGroup.jsx"
import SearchBar from "../SearchBar/SearchBar.jsx"
import { useAppContext } from '../../AppContext.jsx';


const Home = () => {
    // The useState() is imported so we can dynamically change or update the heading when a book name is typed in the input field.
    // const [term, setTerm] = useState('Anything') 
    // const [books, setBooks] = useState([]);
    // const [ data, setData ] = useState([]);
    // const [error, serError] = useState("");
    
    const booksArray = [
      { id: 0, title: 'Default Book', author: 'Author', coverUrl: 'https://res.cloudinary.com/dw0g20ti8/image/upload/v1702103057/book_wegkbh.jpg' },
      { id: 1, title: 'The Lord of the Rings', author: 'J. R. R. Tolkien', coverUrl: 'https://res.cloudinary.com/dw0g20ti8/image/upload/v1702100636/LordOfRing_hxjv6l.jpg' },
      { id: 2, title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams', coverUrl: 'https://res.cloudinary.com/dw0g20ti8/image/upload/v1702104764/hitchhikerGalaxyBig_-_Copy_apodbh.jpg' },
      { id: 3, title: '1984', author: 'George Orwell', coverUrl: 'https://res.cloudinary.com/dw0g20ti8/image/upload/v1702104526/1984_k5hrxi.jpg' },
      { id: 4, title: 'AI', author: 'Google', coverUrl: '' },
      { id: 5, title: 'Мавка.Берегиня лісу', author: 'mavka.ua', coverUrl: 'https://res.cloudinary.com/dw0g20ti8/image/upload/v1702104180/mavka_suq8fx.png' },
    ];

    
    
    const [filteredBooks, setFilteredBooks] = useState(booksArray);
      
    // useEffect(() => {
    //     fetch(`localhost:5000/books/v1/volumes q=${term}&key=${import.meta.env.VITE_SOME_VALUE}`)
    //       .then((res) => {
    //         return res.json();
    //       })
    //       .then((data) => {
    //         setData(data.items);
    //       })
    //       .catch((err) => {
    //         setError(err.message);
    //       });
    //   }, []);

      const handleSearch = (searchTerm) => {
        const filtered = booksArray.filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        //console.log(filtered);
        setFilteredBooks(filtered);
      };
     
    return (
      <div className="sticky top-0">
        <SearchBar onSearch={handleSearch} />
        <Navbar />
        <div className='header'>
          <div className='overlay'>
              <p className='text-md mb-4 px-2 lg:px-0'>
              Читання є актом цивілізації; це один із найвидатніших актів цивілізації, тому що він бере безкоштовний сировинний матеріал розуму та будує замки можливостей.
            </p>
            <BooksGroup booksArray={booksArray}/>
            
            
          </div>
        </div>
      </div>
    );
  };

export default Home;