import { useState, useEffect } from 'react';
import googleBooks from "../apis/googleBooksApi";

const useBooks = (defaultSearchTerm) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (defaultSearchTerm !== '') {
      search(defaultSearchTerm);
    }
  }, [defaultSearchTerm]);

  const search = async term => {
    const response = await googleBooks.get("/", {
      params: {
        q: term,
        maxResults: 5,
      }
    });
    const booksArray = []
    response.data.items.forEach(item => {
      const book = {}
      const {title, description, infoLink, authors, imageLinks} = item.volumeInfo;
      book.title = title;
      book.authors = authors;
      book.description = description;
      book.image = imageLinks.thumbnail;
      book.link = infoLink;
      console.log(item.volumeInfo);
      booksArray.push(book);
    })
    console.log(booksArray)
    setBooks(response.data.items)
  };

  // title: String,
  //   authors: [String],
  //   description: String,
  //   image: String,
  //   link: String,

  return {
    books,
    search,
  }
}

export default useBooks;
