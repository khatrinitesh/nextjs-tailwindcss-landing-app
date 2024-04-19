import React from 'react';
import SocialMedia from './socialmedia';

const Footer = () => {
    const currentdate = new Date();
    const currentfullyear = currentdate.getFullYear();
  return (
    <footer className="bg-black text-white p-5">
       <div className="container mx-auto">
        <p>&copy; {currentfullyear}</p>
        <SocialMedia/>
        </div>
    </footer>
  )
}

export default Footer