import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
// import {useSession} from 'next-auth/client';
// import './navbar.css';

const Navbar = (props) => {
  // const [session, loading ] = useSession();
  // console.log({session, loading});
  const [toggleMenu, setToggleMenu] = useState(false);

  // Fixed Nav Effects
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100){
        document.querySelector('.gpt3__navbar').classList.add('gpt3__navbar_fixed')
      }else if(window.scrollY < 100){
        document.querySelector('.gpt3__navbar').classList.remove('gpt3__navbar_fixed')
      }
    })
  });
  // authLinks
  const router = useRouter();

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <Image src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p className='this is not a classname Sign in was here'></p>
        <button type="button" onClick={() => router.push(props.signUrl)}>{props.sign}</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
