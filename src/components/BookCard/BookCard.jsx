import "./BookCard.css"
import { useState } from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
//import  Modal from '../Modal/Modal.jsx';
//import React  from 'react';
//import Modal from 'react-modal'; 
import BookInfo from '../BookInfo/BookInfo.jsx';
// import {
//     Modal,
//     Ripple,
//     initTE,
//   } from "tw-elements";
  
//  initTE({ Modal, Ripple });
  

const BookCard = ({ title, author, image ,tags, published, pages, rating,  onCardClick }) => {
    const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
    const handleCardClick = () => {
        handleOpen();
    };
 
  
    if (image=="" || image==null) image="https://res.cloudinary.com/dw0g20ti8/image/upload/v1702103057/book_wegkbh.jpg"

return ( 

    <div className="w-full md:w-1/3 lg:w-1/4 p-4 rounded-lg shadow-md bg-white hover:shadow-xl" onClick={handleCardClick}>
    <img src={image} alt={title} className="w-full h-auto rounded-lg mb-2 shadow-xl dark:shadow-gray-800 fixed-size-image" />
    <div className='flex flex-col h-full'>
       <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
       <p className="text-base text-gray-500">{author}</p>
    </div>
       

       {/* <!-- Modal --> */}

       <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Про книгу</DialogHeader>
        <DialogBody>
          <BookInfo title={title} author={author} tags={tags} published={published} pages={pages} rating={rating} />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Закрити</span>
          </Button>
          <Button variant="gradient" color="blue" onClick={handleOpen} disabled>
            <span>Читати</span>
          </Button>
        </DialogFooter>
      </Dialog>

  </div>
)
};

export default BookCard;