import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/dist/frontend/use-user';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from '/public/src/containers';
import { CTA, Brand, Navbar } from '/public/src/components';

function Heeader({ title }) {
return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const {user, error, isLoading } = useUser();
  console.log(user);

return(
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}