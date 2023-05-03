import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [cardList, setCardList] = useState([]);
  const [toyName, setToyName] = useState("");
  const [toyImage, setToyImage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/toys`)
      .then(resp => resp.json())
      .then(data => setCardList(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  
  function nameChange(e) {
    setToyName(e.target.value);
  }

  function imageChange(e) {
    setToyImage(e.target.value);
  }

  function addToy() {
    fetch(`http://localhost:3001/toys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: toyName,
        image: toyImage,
        likes: 0
      })
    })
      .then(resp => resp.json())
      .then(data => {
        setCardList([...cardList, data])
      })
  }

  function deleteToy(item) {
    const deleteList = cardList.filter(e => e.id !== item.id);
    setCardList(deleteList)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm 
        toyName={toyName} 
        toyImage={toyImage}
        nameChange={nameChange}
        imageChange={imageChange}
        addToy={addToy}
      /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer cardList={cardList} deleteToy={deleteToy} />
    </>
  );
}

export default App;
