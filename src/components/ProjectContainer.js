import React from 'react';
import { Link } from 'gatsby';
import { GaLogo, PersonalLogo, FreelanceLogo, GithubIcon } from './Styles';
import placeholder from '../assets/placeholder.png';
import '../styles/timeline.css';

function LinkIcon({ width, fill = '#000' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      width={width}
      viewBox='0 0 24 24'
      stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
      />
    </svg>
  );
}

export const ProjectContainer = ({
  children,
  title,
  stack,
  github,
  link,
  image,
  date,
  occupation,
}) => {
  return (
    <section className='text-justify text-gray-900 rounded shadow-lg my-2'>
      <img
        className='w-full rounded object-fill'
        src={image || placeholder}
        alt={title}
      />
      <div class='px-6 py-4'>
        <p class='font-bold text-2xl'>{title}</p>
        <p class='inline-flex font-normal align-baseline gap-2 my-1'>
          {String(occupation) === 'Freelance' ? (
            <FreelanceLogo />
          ) : String(occupation) === 'Personal' ? (
            <PersonalLogo />
          ) : String(occupation) === 'General Assembly' ? (
            <GaLogo />
          ) : null}{' '}
          {occupation} • {date} •{' '}
          <Link className='align-middle icon' to={link} target='_blank'>
            <LinkIcon width='20px' />
          </Link>
          <Link target='_blank' className='align-middle icon' to={github}>
            <GithubIcon width='20px' />
          </Link>
        </p>
        <div className='my-2'>{children}</div>
        <div className='inline-flex gap-2 my-2'>{stack}</div>
      </div>
    </section>
  );
};

export default ProjectContainer;
