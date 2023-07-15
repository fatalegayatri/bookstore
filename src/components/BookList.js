import React from "react";
import Book from "./Book";
import "../style.css";
const BookList = ({ books, onDelete, onEdit }) => {
  const renderedBooks = books.map((book) => {
    return (
      <Book key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });
  return <div className="card-container"> {renderedBooks}</div>;
};

export default BookList;
