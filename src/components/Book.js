import React from "react";
import "../style.css";
import { useState } from "react";
import EditBook from "./EditBook";

const Book = ({ book, onDelete, onEdit }) => {
  const [edit, setEdit] = useState(true);
  const handleOnclick = () => {
    setEdit(!edit);
  };

  const handleDelete = () => {
    onDelete(book.id);
  };
  return (
    <div>
      <div className="card">
        {edit ? (
          <div className="card-body">
            <img src="https://picsum.photos/200" alt="Book Image" />

            <h5 className="card-title">{book.title}</h5>

            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleOnclick}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleDelete}
              >
                Delete
              </button>
              {/* <EditBook book={book} /> */}
            </div>
          </div>
        ) : (
          <EditBook book={book} onEdit={onEdit} onSave={handleOnclick} />
        )}
      </div>
    </div>
  );
};

export default Book;
