export const validateName = (name) => {
    if (!name) {
      return "Name is required";
    }
  
    if (!/^[a-zA-Z ]+$/.test(name)) {
      return "Name should only contain letters and spaces";
    }
  
    return "";
  };
  
  export const validateUsername = (username) => {
    if (!username) {
        alert('Please enter a valid name.');
      return;
    }
  
    if (username.length < 3 || username.length > 15) {
      return "Username should be between 3 and 15 characters long";
    }
  
    return "";
  };
  
  export const validateEmail = (email) => {
    if (!email) {
      return "Email is required";
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email is not valid";
    }
  
    return "";
  };
  
  export const validatePhoneNumber = (phoneNumber) => {
    if (!phoneNumber) {
      return "Phone number is required";
    }
  
    if (!/^\d{10}$/.test(phoneNumber)) {
      return "Phone number is not valid";
    }
  
    return "";
  };
  
  export const validateCity = (city) => {
    if (!city) {
      return "City is required";
    }
  
    if (!/^[a-zA-Z ]+$/.test(city)) {
      return "City should only contain letters and spaces";
    }
  
    return "";
  };
  
  export const validateCountry = (country) => {
    if (!country) {
      return "Country is required";
    }
  
    if (!/^[a-zA-Z ]+$/.test(country)) {
      return "Country should only contain letters and spaces";
    }
  
    return "";
  };