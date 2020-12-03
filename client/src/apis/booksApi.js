import axios from 'axios';

export const saveBook = async (book) => {
  try {
    console.log(book)
    await axios
      .post("http://localhost:3001/api/books", book,{
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (e) {
    console.log(e);
  }
};
