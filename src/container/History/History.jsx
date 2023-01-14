import React from "react";
import "./History.css";

import Fighter from "../../assets/fighter.jpg";
import Fighter2 from "../../assets/fighter-2.jpg";
import Fighter3 from "../../assets/fighter-3.jpg";
import WomanTrainning from "../../assets/woman-trainning.jpg";
import Victory from "../../assets/victory.jpg";

import Video1 from "../../assets/video-1.mp4";
import Trainings from "./Trainings";

import { motion } from "framer-motion";

const trainings = [
  {
    name: "Training 1",
    image: Fighter
  },
  {
    name: "Training 2",
    image: Fighter3
  },
  {
    name: "Training 3",
    image: Fighter2
  },
  {
    name: "Training 4",
    image: WomanTrainning
  },
  {
    name: "Training 5",
    image: Victory
  },
];

const History = () => {
  return (
    <section className="history" id="history">
      <motion.div 
      className="history-title-text"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      >
        <h1>Create Your History</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,<br></br> quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </p>
      </motion.div>
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
