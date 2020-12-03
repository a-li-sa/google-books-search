import React from 'react';
import {BookItem} from "../components";

export const BookList = ({books}) => {

  const renderedList = books.map((book) => {
    return (
      <BookItem key={book.link} book={book}/>
    )
  })
  return (
    <div>
      {renderedList}
    </div>
  )
}
