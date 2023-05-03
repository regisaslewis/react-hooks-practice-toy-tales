import React, { useState } from "react";

function ToyCard({ item, deleteToy }) {

  const [visLikes, setVisLikes] = useState(item.likes)

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${item.id}`, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then(() => deleteToy(item))
    }

    function addLike() {
      fetch(`http://localhost:3001/toys/${item.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          likes: visLikes + 1
        })
      })
        .then(resp => resp.json())
        .then(data => setVisLikes(data.likes))
    }

  return (
    <div className="card">
      <h2>{item.name}</h2>
      <img
        src={item.image}
        alt={item.name}
        className="toy-avatar"
      />
      <p>{visLikes} {visLikes === 1 ? "Like" : "Likes"}</p>
      <button className="like-btn"onClick={addLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
