import React, { useState, useRef, useEffect } from 'react';
import AnimatedText from 'react-animated-text-content';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Paragraph } from './TimeLineStyles';
const Timeline = () => {

  return (
    <Section id="about">
      <SectionDivider divider/>
      <SectionTitle>About Me</SectionTitle>
      <AnimationOnScroll duration={2} animateIn="animate__fadeInDownBig">
        <Paragraph>
          <AnimatedText
              type="words" // animate words or chars
              animation={{
                x: '200px',
                y: '-20px',
                scale: 1.1,
                ease: 'ease-in-out',
              }}
              animationType="float"
              interval={0.06}
              duration={4}
              tag="p"
              className="animated-paragraph"
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
            >
              
              Hey, I'm Sanjida Nasrin Tanju, A Passionate Web Developer with a hardworking mindset and determined to enrich my knowledge in this sector further with my dedication. I'm responsible, rational, prudent and self-dependent and also I believe in learning from mistake. I can work efficiently as an individual and also with a team. I'm never scared to take new challenges and deal with them.
            </AnimatedText>  
          </Paragraph>
      </AnimationOnScroll>                 
    </Section>
  );
};

export default Timeline;
