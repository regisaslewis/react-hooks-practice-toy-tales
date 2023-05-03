import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ cardList, deleteToy }) {

  const toyCardCollection = cardList.map(e => <ToyCard deleteToy={deleteToy} key={e.id} item={e} />)
  return (
    <div id="toy-collection">{toyCardCollection}</div>
  );
}

export default ToyContainer;
