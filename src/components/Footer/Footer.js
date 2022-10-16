import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import {  Container,  LinkColumn, LinkItem, LinkTitle, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <Section id="contact">
    <SectionDivider divider/>
    <SectionTitle>Contact Me</SectionTitle>
      <AnimationOnScroll duration={2}  animateIn="animate__fadeInUpBig" >
        <Container>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel:+8801864996213">+880 1864-996213</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:sntanju07@gmail.com">
              sntanju07@gmail.com
            </LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Address</LinkTitle>
            <LinkItem >
              246 Fakirkhil, Anowara, Chittagong
            </LinkItem>
          </LinkColumn>

          <SocialIconsContainer>
            <SocialContainer>
              <SocialIcons href="https://github.com/sntanju">
                <AiFillGithub size="3rem" />
              </SocialIcons>
              <SocialIcons href="https://google.com">
                <AiFillLinkedin size="3rem" />
              </SocialIcons>
              <SocialIcons href="https://www.facebook.com/sntanju07">
                <AiFillFacebook size="3rem" />
              </SocialIcons>
            </SocialContainer>
          </SocialIconsContainer>
          </Container>
      </AnimationOnScroll>
    </Section>
  );
};

export default Footer;
