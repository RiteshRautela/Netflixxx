

// Validation function
export const checkValidData = ( email, password ) => {
    // Regex for email validation
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  
    // Regex for password validation
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
    // Regex for name validation (only used in Sign Up mode)
    // const isNameValid = name ? /^[a-zA-Z ]{2,30}$/.test(name) : true;
  
    // Return error messages based on validation
    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
    // if (!isNameValid) return "Name is not valid";
  
    // Return null if all validations pass
    return null;
  };