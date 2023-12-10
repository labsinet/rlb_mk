import { useState } from 'react'
import './App.css'
import Home from "./components/Home/Home"
import BookDetails from './components/BookDetails/BookDetails'
import NotFound from './components/NotFound/NotFound'
import { Routes, Route } from 'react-router-dom'
import BookList from './components/BookList/BookList'
import { AppProvider } from './AppContext.jsx';
import About from './components/About/About.jsx'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <AppProvider>
    <>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Books/:id' element={<BookDetails />} />
        <Route path='bookslist' element={<BookList />} />        
        <Route path='about' element={<About />} />        
        <Route path='*' element={<NotFound/>} />
      </Routes>
      
    </>
    </AppProvider>
  )
}

export default App
