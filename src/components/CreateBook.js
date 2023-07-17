import React from "react";
import { useState } from "react";
import "../style.css";
import useBookContext from "../Hooks/Custom-hook-book";
const CreateBook = () => {
  const { handleBookCreate } = useBookContext();
  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    handleBookCreate(title);
    setTitle("");
  };
  return (
    <div className="form-container">
      <h1 className="form-title"> Add New Book </h1>
      <form action="" onSubmit={handlesubmit}>
        <div className="input-wrapper">
          <label htmlFor="title" className="">
            Title
          </label>
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
