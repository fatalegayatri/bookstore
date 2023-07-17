import React, { useState } from "react";
import "../style.css";
const EditBook = ({ book, onSave }) => {
  const [title, setTitle] = useState(book.title);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(book.id, title);
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="input"
          id="title"
          value={title}
          onChange={handleChange}
        />
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default EditBook;
