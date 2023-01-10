import React from 'react';
import './Trainings.css';

const Trainings = ({name, description, image}) => {
  return (
    <li className="trainings">
    <div className="trainings-container">
      <h5 className="name">{name}</h5>
      <p>{description}</p>
    </div>
    <img alt={`${image}`} src={image} />
  </li>
  )
}

export default Trainings