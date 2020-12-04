import axios from 'axios';

export const saveBook = async (book) => {
  try {
    await axios
      .post("http://localhost:3001/api/books", book);
  } catch (e) {
    console.log(e);
  }
};

export const getBooks = async () => {
  try {
    const res = await axios.get("http://localhost:3001/api/books");
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const deleteBook = async ({_id}) => {
  try {
    return axios.delete(`http://localhost:3001/api/books/${_id}`);
  } catch (e) {
    console.log(e);
  }
};
