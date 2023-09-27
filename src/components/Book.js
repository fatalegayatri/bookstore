import React from "react";
import "../style.css";
import { useState } from "react";
import EditBooks from "./EditBook";
import DeleteModule from "./DeleteModule";
import useBookContext from "../Hooks/Custom-hook-book";
const Book = ({ book }) => {
  const { EditBook, DeleteBook } = useBookContext();

  const [edit, setEdit] = useState(true);
  const [deleteBook, setDeleteBook] = useState(false);

  const handleEditclick = (id, title, boolean) => {
    EditBook(book.id, title);
    setEdit(boolean);
  };
  const handleDeleteclick = () => {
    setDeleteBook(!deleteBook);
  };

  const handleDelete = (boolean) => {
    setDeleteBook(!deleteBook);
    if (boolean) {
      DeleteBook(book.id);
    }
  };

  const handleCancel = (boolean) => {
    setDeleteBook(boolean);
  };
  const newLocal = <img src="https://picsum.photos/200" alt="Book" />;
  return (
    <div>
      <div className="card">
        {edit ? (
          <div className="card-body">
            {newLocal}

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
          <EditBooks book={book} onSave={handleEditclick} />
        )}
      </div>
    </div>
  );
};

export default Book;
