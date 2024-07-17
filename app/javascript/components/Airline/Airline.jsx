import React from "react";
import { useParams } from "react-router-dom";

const Airline = () => {
  let { slug } = useParams();

  return (
    <div>
      <div>
      <h2>This is the Airline page for {slug}</h2>
      </div>
    </div>
  )
}

export default Airline