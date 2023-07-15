import React from "react";
import { useState } from "react";
import "../style.css";

const CreateBook = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };
  return (
    <div className="form-container">
      <h1 className="form-title"> Add New Book </h1>
      <form action="" onSubmit={handlesubmit}>
        <div className="input-wrapper">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleChange}
            className="input"
            required
          />
          <button className="btn">Add Book !</button>
        </div>
      </form>
    </div>
  );
};

export default CreateBook;
