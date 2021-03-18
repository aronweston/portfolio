import React from 'react';
import Layout from '../components/Layout';
import VerticalProjects from '../components/VerticalProjects';
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
} from '../components/Styles';

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
  return (
    <Layout title='Aron Weston / Junior Software Engineer / Sydney, NSW'>
      <section className='flex text-center bg-yellow-200 h-header'>
        <div className='container text-center p-10'>
          <h1 className='text-5xl font-bold pb-5'>Aron Weston</h1>
          <h2 className='text-2xl pb-2'>Junior Software Engineer</h2>
          <h2 className='text-xl pb-5 italic'>Sydney, NSW</h2>
          <Icons />
        </div>
      </section>

      <section className='p-20'>
        <div className='grid grid-cols-2'>
          <div className='mr-5'>
            <span className='text-4xl block pb-5 font-bold text-left'>
              About Me
            </span>
            <p className='text-justify pb-5'>
              A Sydney based third-culture-kid with a passion for learning new
              things and putting plans into action. My Software Engineering
              journey began in 2019 by saying yes to my first Wordpress project
              for a family business.
            </p>
            <p className='text-justify pb-5'>
              After a quick google of “how to build a website” and a few MDN
              links and some jQuery sliders; I was hooked. Since then, I have
              been in the constant search to broaden my skill set and always
              search for that “ah-ha” moment.
            </p>
            <p className='text-justify pb-5'>
              The moment when an idea turns into a reality and the moment when
              what you’ve built has a positive, tangible, impact on another
              person or business.
            </p>
            <p className='text-justify pb-5'>
              My short term goals are to continue expanding upon my current
              stack, gain mentorship and work within diverse teams to achieve
              the same accomplishments at a larger scale.
            </p>
          </div>
          <div className='relative' style={{ paddingTop: '56.25%' }}>
            <iframe
              className='absolute inset-0 w-full h-full'
              src='https://www.youtube-nocookie.com/embed/FMrtSHAAPhM'
              frameborder='0'></iframe>
          </div>
        </div>
      </section>

      <section className='px-20 container'>
        <div className='inline-flex w-full p-5 justify-between text-white bg-gray-900'>
          <ReactLogo width='40px' fill='#fff' />
          <JSLogo width='40px' fill='#fff' />
          <VueLogo width='40px' fill='#fff' />
          <GatsbyIcon width='40px' fill='#fff' />
          <NodeLogo width='40px' fill='#fff' />
          <CSSLogo width='40px' fill='#fff' />
          <HtmlLogo width='40px' fill='#fff' />
          <RubyLogo width='40px' fill='#fff' />
          <RailsLogo width='40px' fill='#fff' />
          <PhpIcon width='40px' fill='#fff' />
          <WordpressLogo width='40px' fill='#fff' />
          <MongoLogo width='40px' fill='#fff' />
          <PostGresLogo width='40px' fill='#fff' />
          <GitLogo width='40px' fill='#fff' />
          <BootstrapIcon width='40px' fill='#fff' />
          <TailwindIcon width='40px' fill='#fff' />
        </div>
      </section>

      <section className='container'>
        <span className='text-4xl block pb-2 px-20 font-bold text-left'>
          Projects &amp; Work History
        </span>
        <VerticalProjects />
      </section>
    </Layout>
  );
};

export default Index;
