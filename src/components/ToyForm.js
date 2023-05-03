import React from "react";

function ToyForm({
  toyName,
  toyImage,
  nameChange,
  imageChange,
  addToy
}) {
  
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={addToy}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={toyName}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={nameChange}
        />
        <br />
        <input
          type="text"
          name="image"
          value={toyImage}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={imageChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
