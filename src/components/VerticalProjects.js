import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import Button from './Button';
import { JSLogo, ReactLogo, WordpressLogo } from './Styles';

const content = { background: '#000', boxShadow: 'none' };

const icon = {
  background: '#000',
  boxShadow: 'none',
};

const ProjectContainer = ({ children, title, stack, github, link }) => {
  return (
    <div className='text-justify text-gray-100 inline-block'>
      <span className='text-2xl'>{title}</span>
      <p>{children}</p>
      <p>Stack: {stack.join(', ')}</p>
      <Button to={link}>Project Link</Button>
      <Button to={link}>Project Link</Button>
    </div>
  );
};

const VerticalProjects = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        date='2011 - present'
        icon={<ReactLogo width='80px' fill='#fff' />}
        contentStyle={content}
        iconStyle={{ ...icon, background: '#000' }}
        className='vertical-timeline-element--work'>
        <ProjectContainer
          title='Lorem ipsum'
          stack={['react', 'lorem']}
          github='google.com'
          link='google.com'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
          reiciendis, excepturi quaerat labore obcaecati repellat quibusdam ut!
          Rerum animi nobis similique tempora in eveniet culpa explicabo
          expedita. Voluptate, autem quos? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Et reiciendis, excepturi quaerat labore
          obcaecati repellat quibusdam ut! Rerum animi nobis similique tempora
          in eveniet culpa explicabo expedita. Voluptate, autem quos? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis,
          excepturi quaerat labore obcaecati repellat quibusdam ut! Rerum animi
          nobis similique tempora in eveniet culpa explicabo expedita.
          Voluptate, autem quos?
        </ProjectContainer>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date='2011 - present'
        icon={<WordpressLogo width='100px' fill='#fff' />}
        contentStyle={content}
        iconStyle={{ ...icon, background: '#000' }}
        className='vertical-timeline-element--work'>
        <ProjectContainer
          title='Lorem ipsum'
          stack={['react', 'lorem']}
          github='google.com'
          link='google.com'></ProjectContainer>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default VerticalProjects;
