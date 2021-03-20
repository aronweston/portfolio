import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  AboutMeIcon,
  EmailLogo,
  GithubIcon,
  LinkedInIcon,
  Logo,
  ProjectsIcon,
  TwitterLogo,
} from './Styles';
import { Link } from 'gatsby';

const Header = () => {
  const [value] = useState('aron@aronweston.com');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // if (copied) {
    //   setTimeout(() => {
    //     setCopied(false);
    //   }, 2000);
    // }
  }, [copied]);
  return (
    <header className='bg-yellow-200 p-2 fixed w-full z-10 top-0'>
      <div className='container mx-auto flex justify-between text-gray-900'>
        <Link className='inline-flex items-center py-1 px-1 my-3 icon' to='/'>
          <Logo />
        </Link>

        <nav>
          <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
            <a
              className={`inline-flex items-center ${
                copied ? 'p-2 my-2 h-25' : 'py-1 px-1 my-3'
              }`}>
              {copied ? 'Copied' : <EmailLogo />}
            </a>
          </CopyToClipboard>
          <Link
            className='inline-flex items-center py-1 px-1 my-3 icon'
            target='_blank'
            to='https://twitter.com/arnowesto'>
            <TwitterLogo />
          </Link>
          <Link
            className='inline-flex items-center py-1 px-1 my-3 icon'
            target='_blank'
            to='https://github.com/aronweston'>
            <GithubIcon />
          </Link>
          <Link
            className='inline-flex items-center py-1 px-1 my-3 icon'
            target='_blank'
            to='https://www.linkedin.com/in/aronweston/'>
            <LinkedInIcon />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
