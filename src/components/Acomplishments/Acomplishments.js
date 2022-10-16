// EDUCATION
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, OuterBox } from './AcomplishmentsStyles';

const Acomplishments = () => (
  <Section>
    <SectionDivider divider/>
    <SectionTitle>Education</SectionTitle>
    <AnimationOnScroll duration={2}  animateIn="animate__fadeInRightBig" >
      <Boxes>
        <OuterBox>
            <Box >
              <BoxNum>Patiya Govternment College</BoxNum>
              <BoxText>
              2021-Current <br/>
              BSS in Economies
              </BoxText>
            </Box>
          </OuterBox>
          <OuterBox>
            <Box >
              <BoxNum>Patiya Govternment College</BoxNum>
              <BoxText>
              2018-2020 <br/>
              HSC
              </BoxText>
            </Box>
          </OuterBox>
          <OuterBox>
            <Box >
              <BoxNum>Chatary Union High School</BoxNum>
              <BoxText>
              2016-18 <br/>
              SSC
              </BoxText>
            </Box>
          </OuterBox>
      </Boxes>
    </AnimationOnScroll>
  </Section>
);

export default Acomplishments;
