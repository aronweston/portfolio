import { Link } from 'gatsby';
import React from 'react';

const Button = ({ to, children }) => {
  return (
    <Link
      to={to}
      className='bg-gray-900 hover:bg-gray-800 text-white icon py-2 px-4 rounded'>
      <button className='inline-block'>{children}</button>
    </Link>
  );
};

export default Button;
