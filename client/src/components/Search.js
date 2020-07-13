import React from 'react'
import { Form, Input } from 'reactstrap'

export default function search({ handleChange }) {
    return (
        <Form>
                <Input
                    type="search"
                    name="search"
                    placeholder="Search for a book title"
                    onChange={handleChange}
                    className="mb-4"
                />
        </Form>
    )
}


