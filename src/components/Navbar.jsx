import React from 'react';

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="bg-blue-500 text-white fixed w-full z-10 top-0">
      <ul className="flex justify-center p-4 space-x-4">
        <li><button onClick={() => handleScroll('home')} className="px-4 py-2">Home</button></li>
        <li><button onClick={() => handleScroll('about')} className="px-4 py-2">About</button></li>
        <li><button onClick={() => handleScroll('projects')} className="px-4 py-2">Projects</button></li>
        <li><button onClick={() => handleScroll('contact')} className="px-4 py-2">Contact</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
