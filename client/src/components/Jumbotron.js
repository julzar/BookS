import React from 'react'
import { Jumbotron, } from 'reactstrap'

const jumbotron = () => {
    return (
        <div>
            <Jumbotron className="text-center">
                <h1 className="display-3">BookS</h1>
                <p className="lead">A simple app for searching and saving books</p>
            </Jumbotron>
        </div>
    )
}

export default jumbotron