import React from 'react';
import Header from './Header';
import { useState } from 'react';
import { checkValidData } from '../utils/validate'
import { useRef } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice';
import { BACK_IMG, USER_AVATAR } from '../utils/constant';

const Login = () => {
  // State to manage whether the form is in "Sign In" or "Sign Up" mode
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errors, setError] = useState();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch()


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm); // Toggles the value of `isSignInForm` between true and false
  };
  const handleButtonClick = () => {

    const message = checkValidData(

      email.current.value,

      password.current.value
    );
    setError(message)
    if (message != null) return;

    // Other wise Sign IN or Up
    if (isSignInForm == false) {
      // if isSigInForm is false that means our signUp form
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up  logic
          const user = userCredential.user;
          //! when user is created we are updating user profile
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR
          }).then(() => {
            //! as soon as  Profile updated! navigate to browse
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser(
                {
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL
                }))
          }).catch((error) => {

            setError(error)
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + errorMessage)
          // ..
        });

    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + errorMessage)
        });

    }
  }

  return (
    <div>
      {/* Header component */}
      <Header />

      {/* Background image */}
      <div className='absolute '>
        <img
          // className="h-screen object-cover"
          src={BACK_IMG}
          alt="background"
        />
      </div>

      {/* Login/Sign Up Form */}
      <form onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-4/12 absolute p-12 bg-black/80 text-white my-36 mx-auto left-0 right-0 max-w-xl">
        {/* Form heading - changes based on `isSignInForm` state */}
        <h1 className='text-3xl md:font-bold md:text-4xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {/* Conditional rendering for the "Name" input field */}
        {/* If `isSignInForm` is false (i.e., Sign Up mode), show the "Name" input */}
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder='Full Name'
            className='bg-gray-800 p-4 my-4 w-full rounded-lg'
          />
        )}

        {/* Email input field */}
        <input
          ref={email}
          type="text"
          placeholder='Email Address'
          className='bg-gray-800 p-4 my-4 w-full rounded-lg'
        />

        {/* Password input field */}
        <input
          ref={password}
          type="password"
          placeholder='Password'
          className='bg-gray-800 p-4 my-4 w-full rounded-lg'
        />
        <p className='text-red-800 font-bold p-2 m-2'>{errors}</p>
        {/* Submit button - text changes based on `isSignInForm` state */}
        <button className='bg-red-700 p-4 my-6 w-full rounded-lg cursor-pointer ' onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* Toggle text to switch between "Sign In" and "Sign Up" modes */}
        <p className='py-4 text-2xl cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;