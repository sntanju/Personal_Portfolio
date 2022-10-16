import React from 'react';
import AnimatedText from 'react-animated-text-content';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { TextLoop } from 'react-text-loop-next';
import { FadeIn } from "react-slide-fade-in";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <AnimationOnScroll duration={1}  animateIn="animate__fadeInLeftBig" >

          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">
            <AnimatedText
                type="chars" // animate words or chars
                animation={{
                  x: '200px',
                  y: '-20px',
                  scale: 1.1,
                  ease: 'ease-in-out',
                }}
                animationType="rifle"
                interval={0.03}
                duration={0.8}
                tag="p"
                className="animated-paragraph"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
              >
                {p.description}

              </AnimatedText>
            </CardInfo><br/>
            <div>
              <TitleContent><b>Technologies</b></TitleContent>
              <TagList>
                <TextLoop children = {p.children}/>
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}><b>Live</b></ExternalLinks>
              <ExternalLinks href={p.source}><b>Github</b></ExternalLinks>
            </UtilityList>
          </BlogCard>

        </AnimationOnScroll>
          
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;