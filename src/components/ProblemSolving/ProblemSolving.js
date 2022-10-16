import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { A, List, ListItem } from './ProblemSolvingStyles';

const ProblemSolving = () => {
    return (
        <Section>
            <SectionDivider divider/>
            <SectionTitle>Problem Solving Skills</SectionTitle>
           
               <List>
            
                <ListItem>
                <AnimationOnScroll duration={2} animateIn="animate__fadeInUpBig">
                   &#9658; Solved <b>100+</b> Problems Overall In Different Online Judge
                </AnimationOnScroll>
                </ListItem>
                
                <ListItem>
                <AnimationOnScroll duration={2} animateIn="animate__fadeInRightBig">
                &#9658; Solved <b>86</b> Problems(Katas) In <A href='https://www.codewars.com/users/sntanju07'>Codewars</A> With <b>Javascript</b> Language
                </AnimationOnScroll>
                </ListItem>
                
                <ListItem>
                <AnimationOnScroll duration={2} animateIn="animate__fadeInLeftBig">
                &#9658; Solved <b>12</b> Problems In <A href='https://www.beecrowd.com.br/judge/en/profile/466298'>Beecrowd</A> With <b>C</b> Language
                </AnimationOnScroll>
                </ListItem>
                
                
                
               </List>

        </Section>
    );
};

export default ProblemSolving;