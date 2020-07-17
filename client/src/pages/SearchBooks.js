import React, { useState, useEffect } from 'react'

import API from '../utils/API'

import Search from '../components/Search'
import Book from '../components/Book'
import NotFound from '../components/NotFound'

export default function SearchBooks() {
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        if (search) {
          API.searchBooks(search).then((res) => {
            setBooks(res.data.items);
          })
        }
      }, [search]);

    function renderBooks() {
        if (!books) {
            return (
                <NotFound />
            )
        }
        return books.map(({ volumeInfo, id }, i) => {
            return (
                <Book
                    key={i}
                    googleId={id}
                    title={volumeInfo.title}
                    authors={(volumeInfo.authors ? volumeInfo.authors.join(', ') : 'No author')}
                    link={volumeInfo.infoLink}
                    image={(volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : 'No image')}
                    synopsis={(volumeInfo.description || 'No synopsis')}
                />
            )
        })
    }

    function handleChange(e) {
        e.preventDefault()
        const { value } = e.target
        setSearch(value.trim())
    }

    return (
        <div>
            <Search handleChange={handleChange} />
            <div>
            {renderBooks()}
            </div>
        </div>
    )
}
