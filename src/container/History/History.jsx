import React from "react";
import "./History.css";

import Fighter from "../../assets/fighter.jpg";
import Fighter2 from "../../assets/fighter-2.jpg";
import Fighter3 from "../../assets/fighter-3.jpg";
import WomanTrainning from "../../assets/woman-trainning.jpg";
import Victory from "../../assets/victory.jpg";

import Trainings from "./Trainings";

const trainings = [
  {
    name: "Training 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Fighter
  },
  {
    name: "Training 2",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Fighter3
  },
  {
    name: "Training 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Fighter2
  },
  {
    name: "Training 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: WomanTrainning
  },
  {
    name: "Training 5",
    image: Victory,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

const History = () => {
  return (
    <section className="history" id="history">
      <h1>Create your History</h1>
      <div className="history">
        <ul className="history-container">
          {trainings.map((item, index) => (
            <Trainings
              key={`${item.name}-${index}`}
              name={item.name}
              image={item.image}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default History;
