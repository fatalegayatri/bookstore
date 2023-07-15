import React from "react";
import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";
import { useState } from "react";
const App = () => {
  const [books, setBooks] = useState([]);

  const HandleBookCreate = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 1000), title },
    ];
    setBooks(updatedBooks);
  };
  const DeleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  const EditBook = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }
      return book;
    });
    setBooks(updatedBooks);
    console.log("it is a updated book", updatedBooks);
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
