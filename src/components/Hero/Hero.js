import React from 'react';
import { TextLoop } from 'react-text-loop-next';
import { TypeAnimation } from 'react-type-animation';
import { ResumeButton } from '../../styles/GlobalComponents/Button';
import { A, LeftSection, Section, SectionText, SectionTitle } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row>
      <LeftSection>
        <SectionTitle main center>
          Hello <br />
          <TypeAnimation
              sequence={[
              "Welcome",
              1000,
              "I'm Sanjida Nasrin Tanju",
              1000,
              
              ]}
              speed={20}
              wrapper="span"
              repeat={Infinity}
            />
        </SectionTitle>
        <SectionText>
          I'm a &nbsp;
        <TextLoop
          children={[,
            "Frontend Developer",
            "Backend Developer",
            "Quick Learner",
            "Tech Enthusiast",
          ]}
        />
        </SectionText>
        <ResumeButton>
          <A href='https://drive.google.com/uc?id=14BPKccVC7jk-0DPeWN4n7oxlWdObuA7g&export=download'> 
          <b>Download Resume</b> 
          </A>
          </ResumeButton>
          <br/>
      </LeftSection>
    </Section>
  </>
);

export default Hero;