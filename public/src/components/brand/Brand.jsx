import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import Image from 'next/image'
// import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <Image src={google} />
    </div>
    <div>
      <Image src={slack} />
    </div>
    <div>
      <Image src={atlassian} />
    </div>
    <div>
      <Image src={dropbox} />
    </div>
    <div>
      <Image src={shopify} />
    </div>
  </div>
);

export default Brand;
