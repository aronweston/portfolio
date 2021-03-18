import React from 'react';
import {
  AboutMeIcon,
  GithubIcon,
  LinkedInIcon,
  Logo,
  ProjectsIcon,
} from './Styles';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className='bg-yellow-200 p-2 fixed w-full z-10 top-0'>
      <div className='container mx-auto flex justify-between text-gray-900'>
        <Link className='inline-flex items-center py-1 px-1 my-3' to='/'>
          <Logo />
        </Link>
        <nav className='flex'>
          <Link
            className='inline-flex items-center py-1 px-1 my-3 '
            to='#projects'>
            <ProjectsIcon />
          </Link>
          <Link className='inline-flex items-center py-1 px-1 my-3' to='#about'>
            <AboutMeIcon />
          </Link>
          <Link
            className='inline-flex items-center py-1 px-1 my-3'
            to='https://github.com/aronweston'>
            <GithubIcon />
          </Link>
          <Link
            className='inline-flex items-center py-1 px-1 my-3'
            to='https://github.com/aronweston'>
            <LinkedInIcon />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
