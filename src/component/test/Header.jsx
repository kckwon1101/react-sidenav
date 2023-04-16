// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full h-full px-4 bg-gray-900 text-white">
      <h1 className="text-lg font-bold">My App</h1>
      <button className="text-white hover:bg-gray-800 rounded">
        Sign In
      </button>
    </header>
  );
};

export default Header;
