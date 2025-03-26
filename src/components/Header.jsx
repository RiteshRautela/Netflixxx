import React from 'react'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import { toggleGptSearchView } from "../utils/gptSlice"
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);



  const handleSingOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  // this useEffect will be called automatically every time when there is state chane in sign-in.up.out
  // useEffect(() => {
  //   const unsubcribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email, displayName, photoURL } = user;
  //       dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL, }));
  //       navigate("/Browse")
  //     }
  //     else {
  //       dispatch(removeUser());
  //       navigate("/")
  //     }
  //   });
  //   return () => unsubcribe();
  // }, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({ uid: user.uid, email: user.email, displayName: user.displayName, photoURL: user.photoURL }));
        if (window.location.pathname === "/") { // ✅ Redirect only if already on login page
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        if (window.location.pathname !== "/") { // ✅ Redirect only if NOT already on login page
          navigate("/");
        }
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]); // ✅ Add dependencies to avoid stale closures
  



  const handleGptSearchClick = () => {
    //* Toggle the GPT search visibility state in Redux
    //* If it's true, it becomes false; if it's false, it becomes true.
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
    console.log(e.target.value)
  };

  const handleTvShowsClick = () => {
    console.log("Navigating to /tv-shows");
    navigate("/tv-shows");
  
  };

    const handleHome = () =>{
      navigate("/browse")
    }

  return (
    <div className="text-white absolute w-screen px-8 py-2 bg-gradient-to-b from-black to-transparent z-10 flex justify-between flex-col md:flex-row">


      <div className="flex items-center">
        <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
        {/* Navigation Links (Centered in Desktop) */}
        <div className="hidden md:flex flex-1 justify-center md:ml-8">
          <div className="text-white  cursor-pointer flex space-x-6">
            <h3 className='hover:text-gray-200' onClick={handleHome}>Home</h3>
            <h3 className='hover:text-gray-200' onClick={handleTvShowsClick}>TV Shows</h3>
            <h3 className='hover:text-gray-200'>Movies</h3>
            <h3 className='hover:text-gray-200'>New & Popular</h3>
          </div>
        </div>
      </div>



      {user && (<div className='justify-between md:flex p-4 items-center '>
        {showGptSearch && <select className='hover:bg-red-500 py-2 px-4 m-2 text-white cursor-pointer bg-red-700'
          onChange={handleLanguageChange}
        >
          {/* <option value="en">English</option>
      <option value="hi">Hindi</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
      <option value="de">German</option>
      <option value="zh">Chinese</option>
      <option value="ar">Arabic</option>
      <option value="ru">Russian</option> */}
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}


        </select>}
        <button className='hover:bg-purple-700 py-2 px-4 m-2 text-white cursor-pointer bg-purple-800'
          onClick={handleGptSearchClick}
        >{showGptSearch ? "Home Page" : "GPT Search"}</button>
        <img
          className='px-7 w-44 font-bold'
          src={user?.photoURL}
          alt="logo" />
        <button className='font-black  text-white cursor-pointer' onClick={handleSingOut} >sign-out</button>
      </div>)}

    </div>
  )
}

export default Header
