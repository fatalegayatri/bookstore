import React from "react";
import "../style.css";
import { useState } from "react";
const DeleteModule = ({ onDelete, onCancel }) => {
  const [close, setClose] = useState(false);
  const closeModule = () => {
    setClose(true);
  };
  const handleCancelClick = () => {
    onCancel(close);
  };
  const handleDeleteClick = () => {
    onDelete(true);
  };
  return (
    <div className="module-container">
      <div className="module">
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
