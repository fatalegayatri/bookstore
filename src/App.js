import React from "react";
import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";
import { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const HandleBookCreate = async (title) => {
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

  return (
    <>
      <CreateBook onCreate={HandleBookCreate} />
      {books.length > 0 ? (
        <>
          <BookList books={books} onDelete={DeleteBook} onEdit={EditBook} />
        </>
      ) : (
        <h1 className="form-title"> No Book Added yet !! </h1>
      )}
    </>
  );
};

export default App;
