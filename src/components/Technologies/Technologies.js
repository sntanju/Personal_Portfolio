import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ImageContainer, List, ListContainer, ListItem, ListParagraph, ListTitle, MainImage, Img, Blink, Span, Text } from './TechnologiesStyles';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Technologies = () =>  (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
    </SectionText>

    <AnimationOnScroll duration={5} animateIn="animate__rubberBand">
    <List>

      <ListItem>
        <Blink><Span><Img src='images/html5.png'/></Span></Blink>
        <Text>HTML-5</Text>
      </ListItem>
      
      <ListItem>
        <Blink><Span><Img src='images/css3.png'/></Span></Blink>
        <Text>CSS-3</Text>
      </ListItem>
      
      <ListItem>
        <Blink><Span><Img src='images/bootstrap5.jpg'/></Span></Blink>
        <Text>Bootstrap</Text>
      </ListItem>
      
      <ListItem>
        <Blink><Span><Img src='images/javascript.png'/></Span></Blink>
        <Text>Javascript</Text>
      </ListItem>
      
      <ListItem>
        <Blink><Span><Img src='images/react.jpg'/></Span></Blink>
        <Text>ReactJS</Text>
      </ListItem>
      
      <ListItem>
        <Blink><Span><Img src='images/axios.png'/></Span></Blink>
        <Text>Axios</Text>
      </ListItem>
      
      <ListItem>
        <Blink><Span><Img src='images/firebase.png'/></Span></Blink>
        <Text>Firebase</Text>
      </ListItem>
      
      <ListItem>
        <Blink><Span><Img src='images/mongodb.jpg'/></Span></Blink>
        <Text>MongoDB</Text>
      </ListItem>
      
      <ListItem>
        <Blink><Span><Img src='images/nodejs.png'/></Span></Blink>
        <Text>NOdeJS</Text>
      </ListItem>
      
      <ListItem>
        <Blink><Span><Img src='images/expressjs.png'/></Span></Blink>
        <Text>ExpressJS</Text>
      </ListItem>
      
      <ListItem>
        <Blink><Span><Img src='images/jwt.png'/></Span></Blink>
        <Text>JWT</Text>
      </ListItem>
      
      <ListItem>
        <Blink><Span><Img src='images/github.png'/></Span></Blink>
        <Text>Github</Text>
      </ListItem>
      
    </List>
    </AnimationOnScroll>

  </Section>
);

export default Technologies;
