import React from 'react';
import Person from '../../assets/person.jpg';
import Nike from '../../assets/nike.svg';
import Adidas from '../../assets/adidas.svg';
import UnderArmour from '../../assets/under-armour.svg';
import './Home.css';

const Home = () => {
  return (
    <>
    <section className="hero_banner">
        <div className="home-container-title">
            <h1>
                COME ON <br></br>
                FIGHT <br></br>
                WITH US !
                </h1>
                <button>Come on</button>
        </div>
        <div className="home-container-image">
            <img src={Person} alt="person banner" />
        </div>
    </section>
        <div className="home-container-sponsors">
            <img src={Nike} alt="logo of Nike" />
            <img src={Adidas} alt="logo of Adidas" />
            <img src={UnderArmour} alt="logo of Monster energy" />
        </div>
        </>
  )
}

export default Home;