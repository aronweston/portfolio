import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Layout = ({ children, title }) => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header />
      <main className='w-full header-space md:mt-18 h-screen'>
        <title>{title}</title>
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
