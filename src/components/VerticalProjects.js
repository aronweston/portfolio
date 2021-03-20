import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import '../styles/timeline.css';
import ProjectContainer from './ProjectContainer';
import { Link } from 'gatsby';
import {
  CSSLogo,
  ExpressIcon,
  HtmlLogo,
  JSLogo,
  MongoLogo,
  NodeLogo,
  PhpIcon,
  PostGresLogo,
  RailsLogo,
  jQueryIcon,
  ReactLogo,
  ReduxIcon,
  RubyLogo,
  TailwindIcon,
  WooIcon,
  WordpressLogo,
} from './Styles';
//Images
import OGImage from '../assets/oliveandgrain.jpg';
import DRMImage from '../assets/drm.jpg';
import ACBImage from '../assets/acb.jpg';
import TTTImage from '../assets/tictactoe.png';
import SydCricketImage from '../assets/syd_cricket.png';
import paperClipImage from '../assets/paperClip.png';
import drip from '../assets/drip.png';

const VerticalProjects = () => {
  return (
    <VerticalTimeline layout={'2-columns'}>
      <VerticalTimelineElement
        icon={<ReactLogo width='80px' fill='#61DAFB' />}
        iconStyle={{ background: '#282C34' }}
        date='Current Fun'
        className='vertical-timeline-element--work'>
        <ProjectContainer
          title='drip'
          occupation='General Assembly'
          stack={[
            <ReactLogo width='35px' />,
            <ExpressIcon width='35px' />,
            <MongoLogo width='35px' fill='#c4c4c4' />,
            <NodeLogo width='35px' fill='#000' />,
            <ReduxIcon width='35px' />,
            <TailwindIcon width='35px' fill='#000' />,
          ]}
          github='https://github.com/aronweston/drip-front'
          link='https://drip.aronweston.com'
          image={drip}
          date='Ongoing'>
          <p>
            Drip Coffee is a subscription coffee ecommerce store built with the
            MERN stack (MongoDB, Express, React & Node). This project uses Redux
            for state management, Stripe for payment processing and MongoDB as a
            NoSQL database. The greatest challenges of this project were
            managing state through Redux, ensuring the shopping cart clears and
            adds products effectively, and to que the appropriate order creation
            and stripe payment functions within the Redux actions.
          </p>
        </ProjectContainer>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        icon={<ReactLogo width='80px' fill='#61DAFB' />}
        iconStyle={{ background: '#282C34' }}
        date='February 2021'
        className='vertical-timeline-element--work'>
        <ProjectContainer
          title='paperClip'
          occupation='General Assembly'
          stack={[
            <ReactLogo width='35px' />,
            <RailsLogo width='35px' />,
            <PostGresLogo width='35px' />,
          ]}
          github='https://github.com/aronweston/paperClip-frontend'
          link='https://paperclip.aronweston.com'
          image={paperClipImage}
          date='February 2021'>
          <p>
            paperClip is an interactive chat application that facilitates the
            creation and preservation of memories with friends around the world.
            This project was a great opportunity to manage a React & Rails
            project within a team. Shout outs to{' '}
            <Link
              target='_blank'
              className='underline'
              to='https://github.com/oisa'>
              Jim
            </Link>
            ,{' '}
            <Link
              target='_blank'
              className='underline'
              to='https://github.com/zohaf'>
              Zoha
            </Link>
            ,{' '}
            <Link
              target='_blank'
              className='underline'
              to='https://github.com/AndreAnggono'>
              Andre.
            </Link>{' '}
            The biggest challenges with this project were managing React Router,
            working with our Rails API to authenticate users and be able to get
            messages actively when the user is logged in.
          </p>
        </ProjectContainer>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        icon={<RailsLogo width='80px' fill='#fff' />}
        iconStyle={{ background: '#CC1C00' }}
        date='January 2021'
        className='vertical-timeline-element--work'>
        <ProjectContainer
          title='Sydney Social Cricket Club'
          occupation='General Assembly'
          stack={[
            <RailsLogo width='35px' />,
            <RubyLogo width='35px' />,
            <PostGresLogo width='35px' />,
          ]}
          github='https://github.com/aronweston/sydney-social-cricket'
          link='https://sydcricket.aronweston.com'
          image={SydCricketImage}
          date='January 2021'>
          <p>
            Sydney Social Cricket Club is an interactive platform where players
            looking to find a team, and teams can fill out their players and
            enjoy some cricket. The application was built with Ruby on Rails and
            PostgresSQL for a database and has full CRUD capabilities for both
            Teams and Players.
          </p>
        </ProjectContainer>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        icon={<JSLogo width='80px' fill='#fff' />}
        iconStyle={{ background: '#f7df1e' }}
        date='December 2020'
        className='vertical-timeline-element--work'>
        <ProjectContainer
          title='Tic Tac Toe'
          occupation='General Assembly'
          stack={[
            <JSLogo width='35px' />,
            <HtmlLogo width='35px' />,
            <CSSLogo width='35px' />,
          ]}
          github='https://github.com/aronweston/tic-tac-toe/tree/number-winning'
          link='https://tictactoe.aronweston.com'
          image={TTTImage}
          date='December 2020'>
          <p>
            Sometimes the simplest and funnest things can be the hardest to do!
            This is a simple Tic Tac Toe game with the ability to choose their
            emoji icon and replay the game when someone wins and looses. The
            challenges of this project were ensuring the tie, win and loss
            conditions all action in the appropriate sequence. Best parts of
            this project was seeing the object orientated approach come to life
            and using utility methods to save on repetition, create a better UI,
            and keep things DRY.
          </p>
        </ProjectContainer>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        icon={<WordpressLogo width='80px' fill='#fff' />}
        iconStyle={{ background: '#21759b' }}
        date='September - November 2020'
        className='vertical-timeline-element--work'>
        <ProjectContainer
          title='Olive & Grain'
          occupation='Freelance'
          stack={[
            <WordpressLogo width='35px' />,
            <PhpIcon width='35px' />,
            <WooIcon width='35px' />,
            <JSLogo width='35px' />,
            <HtmlLogo width='35px' />,
            <CSSLogo width='35px' />,
          ]}
          github='https://github.com/aronweston/oliveandgrain'
          link='https://aw.oliveandgrain.com.au'
          image={OGImage}
          date='September 2020'>
          <p>
            Olive & Grain is a Sydney based delicatessen specialising in
            platters, cakes and quiches. This project was built in WordPress and
            has eCommerce functionality through WooCommerce. I handled all of
            the asset development for this project; images formatting, logo
            design, colour pallette sourcing, web design and development. The
            site was built using jQuery, HTML, CSS and WordPress. The site was
            designed in Figma and sent out for client approval. Then I began
            building out the front-end. After, I broke down back end tasks into
            manageable tasks to ensure the project was delivered on time, and
            under budget.
          </p>
        </ProjectContainer>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        icon={<WordpressLogo width='80px' fill='#fff' />}
        iconStyle={{ background: '#21759b' }}
        date='July 2020'
        className='vertical-timeline-element--work'>
        <ProjectContainer
          title='Doctor Maria'
          occupation='Freelance'
          stack={[
            <WordpressLogo width='35px' />,
            <PhpIcon width='35px' />,
            <JSLogo width='35px' />,
            <HtmlLogo width='35px' />,
            <CSSLogo width='35px' />,
            <jQueryIcon width='35px' />,
          ]}
          github='https://github.com/aronweston/doctormaria'
          link='https://doctormaria.com.au'
          image={DRMImage}
          date='July 2020'>
          <p>
            Doctor Maria is a Melbourne based cosmetic surgeon. This site
            functions as a brochure site for her cosmetic services, as well as a
            booking platform to assist in managing her client booking. The site
            was built using jQuery, HTML, CSS and WordPress. The booking
            functionality was achieved through the Amelia booking platform for
            WordPress.
          </p>
        </ProjectContainer>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        icon={<WordpressLogo width='80px' fill='#fff' />}
        iconStyle={{ background: '#21759b' }}
        date='March 2020'
        className='vertical-timeline-element--work'>
        <ProjectContainer
          title='ACB Operations'
          occupation='Freelance'
          stack={[
            <WordpressLogo width='35px' />,
            <HtmlLogo width='35px' />,
            <CSSLogo width='35px' />,
          ]}
          github='https://github.com/aronweston/acboperations'
          link='https://acboperations.com.au'
          image={ACBImage}
          date='March 2020'>
          <p>
            ACB was an excellent opportunity to build a site using the Divi
            Wordpress Builder and jQuery, HTML, CSS and WordPress. The site was
            built using jQuery, HTML, CSS and WordPress. This site uses{' '}
            <Link
              className='underline'
              target='_blank'
              to='https://flickity.metafizzy.co/'>
              Metafizzy's Flickity jQuery plugin
            </Link>{' '}
            and{' '}
            <a
              target='_blank'
              className='underline'
              href='https://github.com/space10-community/conversational-form'>
              Space 10's Conversational form
            </a>{' '}
            to create an engaging UI.
          </p>
        </ProjectContainer>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default VerticalProjects;
