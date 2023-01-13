import React from 'react';
import './Trainings.css';

const Trainings = ({ name, description, image}) => {
  return (
    <>
    <li className="trainings">
    <div className="trainings-container">
      <h4 className="name">{name}</h4>
    <img alt={`${image}`} src={image} />
    </div>
      <p>{description}</p>
  </li>
  </>
  )
}

export default Trainings