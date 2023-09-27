import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BookContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const handleBookCreate = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const DeleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  const EditBook = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  const stableFetchBooks = useCallback(fetchBooks, []);
  const valueToBePassed = {
    books,
    stableFetchBooks,
    handleBookCreate,
    DeleteBook,
    EditBook,
  };

  return (
    <BookContext.Provider value={valueToBePassed}>
      {children}
    </BookContext.Provider>
  );
}
export { Provider };
export default BookContext;
