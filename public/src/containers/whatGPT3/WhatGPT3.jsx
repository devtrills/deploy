import React from 'react';
import Feature from '../../components/feature/Feature';
// import './whatGPT3.css';
import whatTexts from './whatTexts';

const whatTxts = whatTexts();

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title={whatTxts.aboutHeader} text={whatTxts.aboutHeaderMore} />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">{whatTxts.cardHeader}</h1>
      <p>{whatTxts.cardBtn}</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title={whatTxts.abt1} text={whatTxts.abt1More} />
      <Feature title={whatTxts.abt2} text={whatTxts.abt2More} />
      <Feature title={whatTxts.abt3} text={whatTxts.abt3More} />
    </div>
  </div>
);

export default WhatGPT3;
