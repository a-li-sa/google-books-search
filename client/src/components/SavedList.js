import React from 'react';
import {SavedItem} from "../components";

export const SavedList = ({books}) => {

  const renderedList = books.map((book) => {
    return (
      <SavedItem key={book._id} book={book}/>
    )
  })
  return (
    <div>
      {renderedList}
    </div>
  )
}
