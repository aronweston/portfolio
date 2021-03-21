import React, { useState } from 'react';
import Layout from '../components/Layout';
import VerticalProjects from '../components/VerticalProjects';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  JSLogo,
  NodeLogo,
  RubyLogo,
  ReactLogo,
  VueLogo,
  WordpressLogo,
  RailsLogo,
  MongoLogo,
  PostGresLogo,
  HtmlLogo,
  CSSLogo,
  GitLogo,
  BootstrapIcon,
  GatsbyIcon,
  TailwindIcon,
  PhpIcon,
  ExpressIcon,
  EmailLogo,
  CheckCircle,
  ReduxIcon,
} from '../components/Styles';
import { Link } from 'gatsby';
import ProfileImage from '../assets/profile_image_1.jpg';
import Resume from '../assets/Aron Weston - Resume.pdf';

const Icons = () => {
  return (
    <div className='inline-flex gap-3 mx-auto'>
      <JSLogo width='40px' />
      <ReactLogo width='40px' />
      <VueLogo width='40px' />
      <NodeLogo width='40px' />
    </div>
  );
};

const Index = () => {
  const [value] = useState('aron@aronweston.com');
  const [copied, setCopied] = useState(false);
  return (
    <Layout title='Aron Weston / Junior Software Engineer / Sydney, NSW'>
      <section className='text-center bg-yellow-200 h-half flex justify-center items-center content-center'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold pb-5'>Aron Weston</h1>
          <h2 className='text-2xl pb-2'>Junior Software Engineer</h2>
          <h2 className='text-xl pb-5 italic'>Sydney, NSW</h2>
          <Icons />
        </div>
      </section>

      <main className='container'>
        <section className='bg-white flex flex-row flex-wrap sm:my-20'>
          <div className='w-full flex flex-row flex-wrap p-3 '>
            <div className='md:w-1/4 w-full'>
              <img
                className='rounded-lg shadow-lg w-full'
                src={ProfileImage}
                alt='Aron Weston profile image'
              />
            </div>
            <div className='md:w-2/3 lg:w-2/3 w-full px-3 flex flex-row flex-wrap'>
              <div className='w-full text-right font-semibold relative pt-3 sm:pl-3 md:pt-0'>
                <span className='text-4xl block pb-5 font-bold text-left'>
                  Hi, I'm Aron.
                </span>
                <div className='text-justify font-normal'>
                  <p className='pb-5'>
                    A Sydney based third-culture-kid with a passion for learning
                    new things and putting plans into action. My Software
                    Engineering journey began in 2019 by saying yes to my first
                    Wordpress project for a family business.
                  </p>
                  <p className='pb-5'>
                    After a quick google of “how to build a website” and a few
                    MDN links and some jQuery sliders; I was hooked. Since then,
                    I have been in the constant search to broaden my skill set
                    and always search for that “ah-ha” moment.
                  </p>
                  <p className='pb-5'>
                    The moment when an idea turns into a reality and the moment
                    when what you’ve built has a positive, tangible, impact on
                    another person or business.
                  </p>
                  <p className='pb-5'>
                    My short term goals are to continue expanding upon my
                    current stack, gain mentorship and work within diverse teams
                    to achieve the same accomplishments at a larger scale.
                  </p>
                  <div className='inline-flex gap-2'>
                    <CopyToClipboard
                      text={value}
                      onCopy={() => setCopied(true)}>
                      <button
                        className={`${
                          copied
                            ? 'bg-green-500  hover:bg-green-500'
                            : 'bg-gray-900'
                        } hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none inline-flex items-center `}>
                        {copied ? (
                          <CheckCircle />
                        ) : (
                          <EmailLogo className='w-4 h-4 mr-2' />
                        )}
                        <span>{copied ? 'Copied to clipboard' : 'Email'}</span>
                      </button>
                    </CopyToClipboard>

                    <a href={Resume} target='_blank'>
                      <button class='bg-gray-300 hover:bg-gray-400 text-gray-800 focus:outline-none font-bold py-2 px-4 rounded inline-flex items-center'>
                        <svg
                          className='fill-current w-4 h-4 mr-2'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'>
                          <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
                        </svg>
                        <span>Resume</span>
                      </button>
                    </a>

                    <Link className='outline-white' to='#projects'>
                      <button class='bg-gray-300 hover:bg-gray-400 text-gray-800 focus:outline-none font-bold py-2 px-4 rounded inline-flex items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          className='w-4 h-4 mr-2'
                          stroke='currentColor'>
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                          />
                        </svg>
                        <span>Projects</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='about' className='mt-20'>
          <div className='aspect-w-16 aspect-h-9'>
            <iframe
              src='https://www.youtube.com/watch?v=tv-BGicpIbc'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen></iframe>
          </div>
        </section>
        <section className='w-full inline-flex gap-2 justify-between p-5 text-white bg-gray-900'>
          <ReactLogo width='40px' fill='#fff' />
          <JSLogo width='40px' fill='#fff' />
          <VueLogo width='40px' fill='#fff' />
          <CSSLogo width='40px' fill='#fff' />
          <HtmlLogo width='40px' fill='#fff' />
          <RubyLogo width='40px' fill='#fff' />
          <RailsLogo width='40px' fill='#fff' />
          <NodeLogo width='40px' fill='#fff' />
          <ExpressIcon width='40px' fill='#fff' />
          <GatsbyIcon width='40px' fill='#fff' />
          <PhpIcon width='40px' fill='#fff' />
          <WordpressLogo width='40px' fill='#fff' />
          <MongoLogo width='40px' fill='#fff' />
          <PostGresLogo width='40px' fill='#fff' />
          <ReduxIcon width='40px' fill='#fff' />
          <GitLogo width='40px' fill='#fff' />
          <BootstrapIcon width='40px' fill='#fff' />
          <TailwindIcon width='40px' fill='#fff' />
        </section>

        <section id='projects' className='my-20 mx-2'>
          <span className='text-4xl block pb-5 font-bold text-left'>
            Projects & Work History
          </span>
          <VerticalProjects />
        </section>
      </main>
    </Layout>
  );
};

export default Index;
