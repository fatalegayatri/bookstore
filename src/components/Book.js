import React from "react";
import "../style.css";
import { useState } from "react";
import EditBook from "./EditBook";
import DeleteModule from "./DeleteModule";

const Book = ({ book, onDelete, onEdit }) => {
  const [edit, setEdit] = useState(true);
  const [deleteBook, setDeleteBook] = useState(false);

  const handleEditclick = (id, title) => {
    onEdit(book.id, title);
    setEdit(!edit);
  };
  const handleDeleteclick = () => {
    setDeleteBook(!deleteBook);
  };

  const handleDelete = (boolean) => {
    setDeleteBook(!deleteBook);
    if (boolean) {
      onDelete(book.id);
    }
  };

  const handleCancel = (boolean) => {
    setDeleteBook(boolean);
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
                onClick={handleEditclick}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDeleteclick}
              >
                Delete
              </button>
              {deleteBook && (
                <DeleteModule onCancel={handleCancel} onDelete={handleDelete} />
              )}
            </div>
          </div>
        ) : (
          <EditBook book={book} onSave={handleEditclick} />
        )}
      </div>
    </div>
  );
};

export default Book;
