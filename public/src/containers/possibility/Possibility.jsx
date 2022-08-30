import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import Image from 'next/image'
// import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <Image src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>NFTs and Dapps in the Metaverse</h4>
      <h1 className="gradient__text">The possibilities are<br /> beyond your imagination</h1>
      <p>Helping Brands and individuals create value and aquire commodities in the Metaverse.</p>
      <h4>Contact Us to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
