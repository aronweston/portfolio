import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Button from './Button';

const Footer = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, company, message);
  };

  return (
    <footer className='py-6 w-full bg-yellow-200 text-gray-900 text-center p-5'>
      <form
        action='POST'
        data-netlify='true'
        // onSubmit={handleSubmit}
        className='m-5 container w-1/2 mx-auto'>
        <div className='grid grid-cols-1 gap-6'>
          <label htmlFor='name' class='block'>
            <input
              onChange={(e) => setName(e.target.value)}
              type='text'
              name='name'
              class='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
              placeholder='Name'
            />
          </label>
          <label class='block' htmlFor='company'>
            <input
              type='text'
              onChange={(e) => setCompany(e.target.value)}
              name='company'
              class='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
              placeholder='Company or organisation'
            />
          </label>
          <label className='block' htmlFor='message'>
            <textarea
              name='message'
              onChange={(e) => setMessage(e.target.value)}
              className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
              rows='3'>
              {message}
            </textarea>
          </label>
          <Button>Send!</Button>
        </div>
      </form>
      <div className='mx-auto text-xs text-center'>© 2021, Aron Weston.</div>
    </footer>
  );
};

export default Footer;
