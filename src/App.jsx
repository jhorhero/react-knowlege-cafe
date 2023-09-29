

import './App.css'
import Header from './Components/Header/header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmark/Bookmarks'
import { useState } from 'react'

function App() {
 const [bookmarks, setBookmarks] =useState([])
 const [readingmarks, setReadingmarks] = useState(0)

 const handleAddBookmark = blog =>{
  const newBookmarks = [...bookmarks, blog]
  setBookmarks(newBookmarks)
 }

const handleMarkASread = time =>{
  const newReadingtime = readingmarks + time;
  setReadingmarks(newReadingtime);
}


  return (
    <>
      
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddBookmark={handleAddBookmark} handleMarkASread={handleMarkASread}></Blogs>
    <Bookmarks bookmarks={bookmarks} readingmarks={readingmarks}></Bookmarks>
    </div>
   
    </>
  )
}

export default App
