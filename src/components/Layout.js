import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet
        bodyAttributes={{
          class: 'flex flex-col h-screen justify-between',
        }}
      />
      <Header />
      <main className='w-full md:mt-18 header-space'>
        <title>{title}</title>
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
