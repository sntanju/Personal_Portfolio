import React from 'react';
import { TextLoop } from 'react-text-loop-next';
import { TypeAnimation } from 'react-type-animation';
import { ResumeButton } from '../../styles/GlobalComponents/Button';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
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
        <ResumeButton><b>Download Resume</b></ResumeButton>
      </LeftSection>
    </Section>
  </>
);

export default Hero;