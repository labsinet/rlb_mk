import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar"
import BookCard from '../BookCard/BookCard.jsx'; 
import { useAppContext } from '../../AppContext.jsx';
import {
  getBooks as getRBooksFromApi,
  } from "../../api/services.js";

const Recommend = () => {
  //const { searchTerm, filters } = useAppContext();
  const [booksRecom, setBooksRecom] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const books = await getRBooksFromApi();
    setBooksRecom(books);
  };
//console.log(books);
  


return (
    <div className="w-full" >
    <Navbar />
    <div className="flex flex-wrap justify-center gap-4">
{booksRecom.map((book) => (
  <BookCard key={book.id} title={book.title} author={book.author} image={book.image} tags={book.tags} published
={book.published} pages={book.pages} rating={book.rating}        />
))}
</div> 
   

    </div>
  )
}

export default Recommend