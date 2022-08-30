import React from 'react';
import { Blog, Possibility, Features, WhatGPT3, Header } from '../../public/src/containers';
import { CTA, Brand, Navbar } from '../../public/src/components';
import getUser from '../api/hooks/user';
// function Heeader({ title }) {
// return <h1>{title ? title : 'Default title'}</h1>;
// }
export default function Homepage () {
    const userObj = getUser();

  return(
    <div className="App">
      <div className="gradient__bg">
        <Navbar sign={!userObj.user ? 'Sign In' : 'Sign Out'} signUrl={!userObj.user ? '/api/auth/login' : '/api/auth/logout'} />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      {/* <Footer /> */}
    </div>
  );
}