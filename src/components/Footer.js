import React, { useState, useEffect } from 'react';
import Button from './Button';

const Footer = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleSubmit = async (e) => {
    const body = {
      name,
      company,
      message,
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'portfolio form': 'portfolio form', body }),
    })
      .then(() => {
        alert('Success!');
        setIsSent(true);
      })
      .catch((error) => alert(error));

    e.preventDefault();
    console.log(name, company, message);
  };

  return (
    <footer className='py-6 w-full bg-yellow-200 text-gray-900 text-center p-5'>
      <form
        method='POST'
        data-netlify='true'
        name='portfolio form'
        onSubmit={handleSubmit}
        data-netlify-honeypot='bot-field'
        className='m-5 container w-1/2 mx-auto'>
        <input type='hidden' name='portfolio-form' value='portfolio form' />
        <div className='grid grid-cols-1 gap-3'>
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
          <div data-netlify-recaptcha='true'></div>
          <Button>Send!</Button>
        </div>
      </form>
      <div className='mx-auto text-xs text-center'>© 2021, Aron Weston.</div>
    </footer>
  );
};

export default Footer;
