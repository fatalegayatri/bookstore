import React, { useState } from "react";

const EditBook = ({ onEdit, book, onSave }) => {
  const [title, setTitle] = useState(book.title);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit", title);
    onSave();
    onEdit(book.id, title);
  };

  return (
    <div>
      <form className="form-group" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
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
