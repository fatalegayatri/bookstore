import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "../style.css";
import { useState } from "react";
const DeleteModule = ({ onDelete, onCancel }) => {
  const [close, setClose] = useState(false);

  const handleCancelClick = () => {
    onCancel(close);
  };
  const handleDeleteClick = () => {
    onDelete(true);
  };
  return (
    <div className="module-container">
      <div className="module">
        <AiFillCloseCircle className="close-icon" onClick={handleCancelClick} />
        <div className="">
          <h2 className="title">Delete Book</h2>
          <p>Are you sure you want to delete this Book?</p>
        </div>
        <div className="btn-group">
          <button className="btn btn-danger" onClick={handleDeleteClick}>
            Delete
          </button>
          <button className="btn btn-secondary" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModule;
