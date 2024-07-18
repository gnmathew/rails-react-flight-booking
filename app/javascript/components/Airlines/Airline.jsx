import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const Airline = (props) => {
  // Destructure attributes and slug from props
  const { attributes } = props;

  //Check if attributes are defined before rendering
  if (!attributes) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <div className="airline-logo">
        <img src={ attributes.image_url } alt={ attributes.name }></img>
      </div>
      <div className="airline-name">{ attributes.name }</div>
      <div className="airline-score">{ attributes.avg_score }</div>
      <div className="airline-link">
        <link to={`/airlines/${ attributes.slug }`}>View Airlines</link>
      </div>
    </div>
  )
}

export default Airline
