import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import '../styles/timeline.css';
import ProjectContainer from './ProjectContainer';
import {
  CSSLogo,
  ExpressIcon,
  HtmlLogo,
  JSLogo,
  MongoLogo,
  NodeLogo,
  PhpIcon,
  RailsLogo,
  ReactLogo,
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
        date='September 2020'
        className='vertical-timeline-element--work'>
        <ProjectContainer
          title='drip'
          occupation='General Assembly'
          stack={[
            <ReactLogo width='35px' />,
            <ExpressIcon width='35px' />,
            <MongoLogo width='35px' fill='#000' />,
            <NodeLogo width='35px' fill='#000' />,
            <TailwindIcon width='35px' fill='#000' />,
          ]}
          github='google.com'
          link='google.com'
          image={drip}
          date='September 2020'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            officiis et consectetur! Possimus deleniti ea facere. Incidunt iste
            ex natus dolor accusamus commodi non aliquid minima, et fuga magni
            quas.
          </p>
        </ProjectContainer>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        icon={<ReactLogo width='80px' fill='#61DAFB' />}
        iconStyle={{ background: '#282C34' }}
        date='September 2020'
        className='vertical-timeline-element--work'>
        <ProjectContainer
          title='paperClip'
          occupation='General Assembly'
          stack={[<ReactLogo width='35px' />, <RailsLogo width='35px' />]}
          github='google.com'
          link='google.com'
          image={paperClipImage}
          date='September 2020'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            officiis et consectetur! Possimus deleniti ea facere. Incidunt iste
            ex natus dolor accusamus commodi non aliquid minima, et fuga magni
            quas.
          </p>
        </ProjectContainer>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        icon={<RailsLogo width='80px' fill='#fff' />}
        iconStyle={{ background: '#CC1C00' }}
        date='September 2020'
        className='vertical-timeline-element--work'>
        <ProjectContainer
          title='Sydney Social Cricket Club'
          occupation='General Assembly'
          stack={[
            <RailsLogo width='35px' />,
            <RubyLogo width='35px' />,
            <JSLogo width='35px' />,
            <HtmlLogo width='35px' />,
            <CSSLogo width='35px' />,
          ]}
          github='google.com'
          link='google.com'
          image={SydCricketImage}
          date='September 2020'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            officiis et consectetur! Possimus deleniti ea facere. Incidunt iste
            ex natus dolor accusamus commodi non aliquid minima, et fuga magni
            quas.
          </p>
        </ProjectContainer>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        icon={<JSLogo width='80px' fill='#fff' />}
        iconStyle={{ background: '#f7df1e' }}
        date='September 2020'
        className='vertical-timeline-element--work'>
        <ProjectContainer
          title='Tic-Tac-Toe'
          occupation='General Assembly'
          stack={[
            <JSLogo width='35px' />,
            <HtmlLogo width='35px' />,
            <CSSLogo width='35px' />,
          ]}
          github='google.com'
          link='google.com'
          image={TTTImage}
          date='September 2020'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            officiis et consectetur! Possimus deleniti ea facere. Incidunt iste
            ex natus dolor accusamus commodi non aliquid minima, et fuga magni
            quas.
          </p>
        </ProjectContainer>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        icon={<WordpressLogo width='80px' fill='#fff' />}
        iconStyle={{ background: '#21759b' }}
        date='September 2020'
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
          github='google.com'
          link='google.com'
          image={OGImage}
          date='September 2020'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            officiis et consectetur! Possimus deleniti ea facere. Incidunt iste
            ex natus dolor accusamus commodi non aliquid minima, et fuga magni
            quas.
          </p>
        </ProjectContainer>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        icon={<WordpressLogo width='80px' fill='#fff' />}
        iconStyle={{ background: '#21759b' }}
        date='September 2020'
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
          ]}
          github='https://doctormaria.com.au'
          link='https://github.com/aronweston/'
          image={DRMImage}
          date='September 2020'>
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
        date='September 2020'
        className='vertical-timeline-element--work'>
        <ProjectContainer
          title='ACB Operations'
          occupation='Freelance'
          stack={[
            <WordpressLogo width='35px' />,
            <HtmlLogo width='35px' />,
            <CSSLogo width='35px' />,
          ]}
          github='https://acboperations.com.au'
          link='https://github.com/aronweston/'
          image={ACBImage}
          date='September 2020'>
          <p>
            ACB was an excellent opportunity to build a site using the Divi
            Wordpress Builder and jQuery, HTML, CSS and WordPress. This site
            uses Metafizzy's Flickity jQuery plugin and Space 10's
            Conversational form to create an engaging UI.
          </p>
        </ProjectContainer>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default VerticalProjects;
