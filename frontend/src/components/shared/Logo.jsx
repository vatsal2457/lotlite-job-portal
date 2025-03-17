import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-2xl font-bold text-[#3b82f6]">Lotlite</span>
    </Link>
  );
};

export default Logo; 