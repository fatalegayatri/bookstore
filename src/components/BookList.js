import React from "react";
import Book from "./Book";
import "../style.css";
import useBookContext from "../Hooks/Custom-hook-book";

const BookList = () => {
  const { books } = useBookContext();

  const renderedBooks = books.map((book) => {
    return <Book key={book.id} book={book} />;
  });
  return <div className="card-container"> {renderedBooks}</div>;
};

export default BookList;
