//import React from 'react'
//import { useState } from 'react';

const GenreItem = ({ title }) => {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 p-4 rounded-lg shadow-md bg-white hover:shadow-xl" >
     
       <div className='flex flex-col h-full'>
         <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
     
       </div>
    </div>

  )
}

export default GenreItem