import { useState } from "react";

const SingleItem = ({ name, completed, removeItem, id, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => editItem(id)}
      ></input>

      <p style={{ textTransform: "capitalize" }}>{name}</p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => removeItem(id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
