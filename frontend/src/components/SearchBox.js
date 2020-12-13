import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <div className='input-group input-group-sm'>
        <input
          type='text'
          className='form-control'
          onChange={(e) => setKeyword(e.target.value)}
          name='q'
          placeholder='Search Paintings'
          aria-label='Search Paintings'
          aria-describedby='button-addon2'
        />
        <button
          className='btn btn-sm btn-outline-secondary'
          type='submit'
          id='button-addon2'
        >
          Search
        </button>
      </div>
    </Form>
  )
}

export default SearchBox
