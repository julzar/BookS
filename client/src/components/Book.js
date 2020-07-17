import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Button } from 'reactstrap'
import API from '../utils/API'

export default function Book({ title, authors, synopsis, image, link, googleId, id}) {
    const { pathname } = useLocation()
    const history = useHistory()

    function save() {
        API.saveBook({ title, authors, synopsis, image, link, googleId })
    }
    function remove() {
        API.deleteBook(id)
        .then(history.go())
    }

    return (
        <div className='mb-4'>
            <img src={image} alt={`${title} cover`}/>
            <h2>{title}</h2>
            <p>{authors}</p>
            <p>{synopsis}</p>
            <a href={link} style={{color: 'grey'}} target='_blank' rel='noopener noreferrer'>View on Google Books</a>
            <Button className={pathname === '/search' || pathname === '/' ? 'btn-sm btn-light btn-outline-secondary ml-4' : 'd-none'} onClick={save}>Save</Button>
            <Button className={pathname === '/saved' ? 'btn-sm btn-light btn-outline-secondary ml-4' : 'd-none'} id={id} onClick={remove}>Delete</Button>
            <div className='border-bottom mt-2 mb-2'/>
        </div>
    )
}