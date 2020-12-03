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
    try {
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
        booksArray.push(book);
      })
      console.log(booksArray)
      setBooks(response.data.items)
    } catch (e) {
      console.log(`Your search - ${term} - did not match any book results. 
      
Suggestions: 
      * Make sure all words are spelled correctly.
      * Try different keywords.
      * Try more general keywords.
      * Try fewer keywords.`)
    }
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
