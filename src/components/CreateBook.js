import React from "react";
import { useState } from "react";
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
    <div>
      <h1> Add New Book </h1>
      <form action="" onSubmit={handlesubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={handleChange} />
        <button>Add Book !</button>
      </form>
    </div>
  );
};

export default CreateBook;
