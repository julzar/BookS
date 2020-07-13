  
import React, { useState, useEffect } from "react"
import API from "../utils/API"
import Book from "../components/Book"
import NotFound from "../components/NotFound"
import Search from '../components/Search'

export default function Saved() {
  const [savedBooks, setSavedBooks] = useState([])

  useEffect(() => {
    API.getBooks().then((res) => {
      setSavedBooks(res.data)
    })
  }, [])

  function renderBooks() {
    if (!savedBooks) {
        return (
            <NotFound />
        )
    }
    return savedBooks.map((book, i) => {
      return (
        <Book
          key={i}
          id={book._id}
          title={book.title}
          authors={book.authors}
          link={book.link}
          image={book.image}
          synopsis={book.synopsis}
        />
      )
    })
  }

  return (
    <div>
        <Search />
        <div>
            {renderBooks()}
        </div>
        
    </div>
  )
}