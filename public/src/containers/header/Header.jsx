import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import Image from 'next/image'
// import './header.css';
import head from "./headerTexts";

const headTexts = head();

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
    {/* Let&apos;s Build Something amazing with GPT-3 OpenAI */}
      <h1 className="gradient__text">{headTexts.CTA}</h1>
      <p>{headTexts.CTAsub}</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder={headTexts.placeholder} />
        <button type="button">{headTexts.button}</button>
      </div>

      <div className="gpt3__header-content__people">
        <Image src={people} />
        <p>{headTexts.subText}</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <Image src={ai} />
    </div>
  </div>
);

export default Header;
