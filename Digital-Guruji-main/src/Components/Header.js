import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import logo from "../assets/logoBaba.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = ({ scrollToConsulting }) => {
  const el = useRef(); 
  useGSAP(()=>{
    gsap.from(".same",{
      y:100,
      delay:0.5,
      opacity:0
    })
  })
  
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['APPKE APNE GURUJI', "EMPOWERING STRESS FREE MUMBAI"],  typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });
    

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header className="bg-black text-white backdrop-blur-md font-black p-0 shadow-lg">
      <div className="container mx-auto flex same items-center justify-between">
        <div className="flex items-center">
          <img 
            src={logo}
            alt="Baba Logo"
            className="w-[60px] h-[60px] rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="text-xl font-bold tracking-wider">DIGITAL GURUJI</h1>
          <p ref={el} className="text-sm font-extrabold italic text-white pl-[18rem]" />
        </div>

        <nav className="flex space-x-4">
          <a href="#home" className="text-lg font-semibold text-white hover:text-orange-300">Home</a>
          <a href="#about" className="text-lg font-semibold text-white hover:text-orange-300">About</a>
          <a 
            href="#consulting" 
            onClick={scrollToConsulting} 
            className="text-lg font-semibold text-white hover:text-orange-300"
          >
            Consultation
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
