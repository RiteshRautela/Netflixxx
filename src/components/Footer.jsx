import React from 'react';
import { LOGO } from '../utils/constant';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate("/about")
    }
  return (
    <div className='bg-black p-4 md:px-12 flex flex-col md:flex-row justify-between items-center'>
      {/* Logo on the Left */}
      <img className="w-44" src={LOGO} alt="logo" />

      {/* Navigation Links on the Right */}
      <div className='mt-4 md:mt-0'>
        <div className="text-white cursor-pointer flex gap-8">
          <h2 onClick={handleClick}>About</h2>
          <h2>Privacy Policy</h2>
          <h2>Contact</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
