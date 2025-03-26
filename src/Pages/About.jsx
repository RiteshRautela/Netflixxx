import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SCREENSHOT } from '../utils/constant';
import { useState } from 'react';
import Spinning from '../components/Spinning';

const About = () => {
const [ isLoading  ,setIsLoading] = useState(true);

useEffect(()=>{
    const timer = setTimeout(()=>{
        setIsLoading(false)
    ,7000})
        return () => clearTimeout(timer)
},[])
  return (
    <div className='bg-black min-h-screen'>
      {/* Header at the top */}
      <Header />

      {/* About Me Section with space from the header */}
     {isLoading?<Spinning/> : <div className='about-us px-4 md:px-24 pt-44'>
        <h1 className='text-5xl text-white text-center mb-4 font-bold'>About NetflixGPT</h1>
        <p className='text-gray-400 mb-8 text-center'>
          "Experience NetflixGPT: A Feature-Rich, Mobile-Friendly Netflix Clone with Cutting-Edge Tech Stack! 🚀
          <br />
          <br />
          Dive into the world of Netflixxx, a carefully crafted Netflix clone that boasts an impressive tech stack including React, Redux, Webpack, React Router, TMDB APIs, Tailwind CSS, Firebase, React-DOM, and Jest.
          The result? An exceptional web application designed for optimal performance and seamless user interactions.
          <br />
          <br />
          NetflixGPT is fully optimized to ensure lightning-fast load times and a smooth user experience, making it perfect for both desktop and mobile devices. Discover a user-friendly interface that offers an immersive viewing experience, all in the palm of your hand.
          <br />
          <br />
          Join me in the future of web development, where innovation and user-centric design converge to create NetflixGPT—a showcase of what's possible in the realm of entertainment.
        </p>

        <div className='mb-8 text-gray-200'>
          Github: <a href='https://www.linkedin.com/in/ritesh-rautela-74483833b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='hover:text-blue-700 ml-3 text-blue-600 text-sm' target='_blank' rel='noreferrer'>NetflixxxT</a>
          <br />
          Live Demo: <a href='xxx' target='_blank' className='hover:text-blue-700 ml-3 text-blue-600 text-sm' rel='noreferrer'>Live Demo dunga baad mai</a>
          <br />
          Linkedin: <a href='https://www.linkedin.com/in/okneerajsingh/' className='hover:text-blue-700 ml-3 text-blue-600 text-sm' target='_blank' rel='noreferrer'>Ritesh Rautela</a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.keys(SCREENSHOT).map((key) => (
            <div key={key} className='screen rounded overflow-hidden shadow-xl'>
              <a href={SCREENSHOT[key]} target="_blank" rel="noreferrer">
                <img src={SCREENSHOT[key]} className='w-full hover:scale-110 transition-transform duration-700' alt={key} />
              </a>
            </div>
          ))}
        </div>
      </div> }

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default About;
