import React from 'react';

const Button = ({ label, width, height, bgColor, boderR }) => {
  const buttonStyles = {
    width: width || 'auto',          
    height: height || 'auto',        
    backgroundColor: bgColor || '', 
    borderradius: boderR 
  };

  return (
    <button
      style={buttonStyles}
      className="inline-block text-white text-[24px] sm:text-base px-4 py-[.4em] bg-primary rounded-[7px] hover:shadow-md active:scale-90 duration-200 font-poppins font-[500]"
    >
      {label}
    </button>
  );
};

export default Button;
