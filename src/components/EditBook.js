import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import "../style.css";
const EditBooks = ({ book, onSave }) => {
  const [title, setTitle] = useState(book.title);
  const [close, setClose] = useState(true);
  const handleClose = () => {
    console.log("close");
    setClose(!close);
    onSave(book.id, title, close);
  };
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(book.id, title, close);
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <AiFillCloseCircle className="close-icon" onClick={handleClose} />
        <div className="input-wrapper">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="input"
            id="title"
            value={title}
            onChange={handleChange}
          />
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditBooks;
