import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled(motion.footer)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #949396;
  color: #ffffff;
  height: 110px;
  width: 100%;

`;

const FooterText = styled.p`
  font-size: 12px;
  text-align: center;
`;

const footerVariants = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
};

const Footer = () => {
  return (
    <FooterContainer variants={footerVariants} initial="initial" animate="animate">
      <FooterText>
      E-mail :
      </FooterText>
      <FooterText>contact@cercleoptima.com</FooterText>
      <FooterText>Téléphone :</FooterText>
      <FooterText>04 42 50 96 90</FooterText>
      <FooterText>Addresse :</FooterText>
      <FooterText>Cercle Optima 31 avenue Francis Perrin 13106 Rousset Cedex France</FooterText>
    </FooterContainer>
  );
};

export default Footer;