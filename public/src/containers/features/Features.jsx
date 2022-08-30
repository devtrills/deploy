import React from 'react';
import Feature from '../../components/feature/Feature';
// import './features.css';
import featuresText from './featuresText';
const ft = featuresText();

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];
console.log(ft.header);
const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <div>
        <h1 className="gradient__text">{ft.header}</h1>
        <p>{ft.button}</p>
      </div>
      <div>
        <h1 className="gradient__text">{ft.header2}</h1>
        <p>{ft.button2}</p>
      </div>
      <div>
        <h1 className="gradient__text">{ft.header3}</h1>
        <p>{ft.button3}</p>
      </div>
    </div>
    <div className="gpt3__features-container">
      {ft.featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
