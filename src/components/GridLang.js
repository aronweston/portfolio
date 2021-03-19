import React from 'react';

const GridLang = () => {
  return (
    <div>
      <section className='my-20 w-full'>
        <div className='grid grid-cols-4 grid-flow-col overflow-hidden p-5 gap-10 text-white bg-gray-900'>
          <div>
            <p>Front-end Languages &amp; Frameworks</p>
            <div className='grid grid-cols-3 grid-rows-3 gap-2'>
              <ReactLogo width='40px' fill='#fff' />
              <JSLogo width='40px' fill='#fff' />
              <VueLogo width='40px' fill='#fff' />
              <CSSLogo width='40px' fill='#fff' />
              <HtmlLogo width='40px' fill='#fff' />
            </div>
          </div>
          <div>
            <p className=''>Backend Languages &amp; Frameworks</p>
            <div className='grid grid-cols-3 grid-rows-3 gap-2'>
              <RubyLogo width='40px' fill='#fff' />
              <RailsLogo width='40px' fill='#fff' />
              <NodeLogo width='40px' fill='#fff' />
              <ExpressIcon width='40px' fill='#fff' />
              <GatsbyIcon width='40px' fill='#fff' />
              <PhpIcon width='40px' fill='#fff' />
              <WordpressLogo width='40px' fill='#fff' />
            </div>
          </div>

          <div>
            <p className=''>SQL &amp; NoSQL Databases</p>
            <div className='grid grid-cols-3 grid-rows-3 gap-2'>
              <MongoLogo width='40px' fill='#fff' />
              <PostGresLogo width='40px' fill='#fff' />
            </div>
          </div>

          <div>
            <p className=''>Tools &amp; Libraries</p>
            <div className='grid grid-cols-3 grid-rows-3 gap-2'>
              <GitLogo width='40px' fill='#fff' />
              <BootstrapIcon width='40px' fill='#fff' />
              <TailwindIcon width='40px' fill='#fff' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GridLang;
