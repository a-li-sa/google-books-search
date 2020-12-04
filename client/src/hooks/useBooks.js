import { useState, useEffect } from 'react';
import googleBooks from "../apis/googleBooksApi";

const useBooks = (defaultSearchTerm) => {
  const [books, setBooks] = useState([]);
  const [searchError, setSearchError] = useState(false);

  useEffect(() => {
    search('JavaScript');
  }, [defaultSearchTerm]);

  const search = async term => {
    try {
      const response = await googleBooks.get("/", {
        params: {
          q: term,
          maxResults: 10,
        }
      });
      const booksArray = []
      response.data.items.forEach(item => {
        const book = {}
        const {title, description, infoLink, authors, imageLinks } = item.volumeInfo;
        book.title = title;
        book.authors = authors;
        book.description = description;
        book.image = imageLinks.thumbnail;
        book.link = infoLink;
        booksArray.push(book);
      })
      setBooks(booksArray)
    } catch (e) {
      setSearchError(true);
    }
  };

  return {
    books,
    search,
    searchError,
    setSearchError
  }
}

export default useBooks;
