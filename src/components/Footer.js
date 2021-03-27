import React from 'react';

const Footer = () => {
  return (
    <footer className='py-6 w-full bg-yellow-200 text-gray-900 text-center p-5'>
      <span className='text-4xl block font-bold'>Let's chat!</span>
      <form
        method='POST'
        data-netlify='true'
        name='portfolioForm'
        data-netlify-honeypot='bot-field'
        className='m-5 container w-1/2 mx-auto'>
        <input type='hidden' name='form-name' value='portfolioForm' />
        <div className='grid grid-cols-1 gap-3'>
          <label htmlFor='name' class='block'>
            <input
              type='text'
              name='name'
              class='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
              placeholder='Name'
            />
          </label>
          <label class='block' htmlFor='company'>
            <input
              type='text'
              name='company'
              class='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
              placeholder='Company or organisation'
            />
          </label>
          <label class='block' htmlFor='email'>
            <input
              type='email'
              name='email'
              class='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
              placeholder='Email'
            />
          </label>
          <label className='block' htmlFor='message'>
            <textarea
              name='message'
              className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
              placeholder='How can I help?'
              rows='3'></textarea>
          </label>
          <div data-netlify-recaptcha='true'></div>
        </div>
        <button class='bg-gray-900 hover:bg-gray-800 text-white focus:outline-none font-bold py-2 px-4 rounded text-center items-center w-full'>
          Send!
        </button>
      </form>
      <div className='mx-auto text-xs text-center'>© 2021, Aron Weston.</div>
    </footer>
  );
};

export default Footer;
