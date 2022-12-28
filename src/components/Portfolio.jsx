import React from 'react';
import portfolio from '../data/portfolio.json';
import Particle from './Particle';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'
import '@fontsource/bangers'
import NavBar from './NavBar'
import {    
  AboutMeContainer,
  PortfolioContainer, 
  HeaderContainer, 
  ProjectContainer,
  ContactResumeContainer,
  ContactContainer,
  ResumeContainer,
  ProjectItem,
  ProjectImage,
  ProjectItemText
} from '../styles/portfolio'



const Header = () => {
  return (
    <HeaderContainer>
      <Particle/>
      <motion.h1
        initial={{opacity:0}}
        animate={{opacity:1}} 
        transition={{ duration: 1.5}}
        whileHover={{ color:'white', borderBottom:'1px solid white'}}
      >Bennett Kautz</motion.h1>
      <motion.p
        initial={{opacity:0}}
        animate={{opacity:1}} 
        transition={{ duration: 1.5, delay:1}}
      >Frontend Developer</motion.p>

    </HeaderContainer>
  );
};

const Contact = () => {
  return (
    <ContactResumeContainer
      initial={{ opacity:0}} 
      whileInView={{ opacity:1}}>
      <ContactContainer>
        <h2>Contact</h2>
        <p>You can contact me by email at bennettkautz@gmail.com</p><br/>
        <SocialIcon url="https://www.linkedin.com/in/bennett-kautz-187241158/"/>
        <SocialIcon url="https://github.com/bkautz0824"/>
      </ContactContainer>
     
      <ResumeContainer>
      <h2>Resume</h2>
      <p>
        You can download a copy of my resume <a href="/resume">here</a>.
      </p>
    </ResumeContainer>
    </ContactResumeContainer>
  )
};

const Projects = () => {
 

  const spring = {
    type: "spring",
    damping: 100,
    duration: 3
    // stiffness: 100
  }  


  return (
    <ProjectContainer 
      initial={{ 
        opacity:0,
        // height: "500px",
        width: 0,
        // margin: 50,
        // padding: 50
        //  x: -2500,
        //  y: 2500
      }} 
      whileInView={{ 
        opacity:1,
        height: "1200px",
        width: "auto",
        zIndex: 1
      }}
      transition={spring}>
      <motion.h2 
        whileInView={{color: "#90EE90"}} 
        transition={{ duration: 7}}
      >
        Projects
      </motion.h2>
     
          {
          
          portfolio && portfolio.map((item) =>{ 

          return(
            
           <ProjectItem
           transition={spring}
           initial={{
            width: "0px"
           }}
            whileInView={{
              width:"80%",
            }}
           >
            
              <ProjectImage 
                src={require(`../${item.imgUrl}`)}
                whileHover={{ }}
              />
            
              <ProjectItemText
                 whileHover={{scale: 1.2}}  
              >
                <motion.h1
                  // animate={{color: "white", x:0}} 
                  // initial={{x: -2500}} 
                  // transition={{  duration: 5}}
                >{item.title}</motion.h1>
                <p>{item.description}</p>
                <SocialIcon url="https://github.com/bkautz0824"/>
              </ProjectItemText>
            </ProjectItem>)
          })
          
          }

      
    </ProjectContainer>
  );
};


const AboutMe = () => {


  return(
    <AboutMeContainer>

    </AboutMeContainer>

  )
}


const Portfolio = () => {



  return (
    <PortfolioContainer>
      <NavBar />
      <Header />
      <Projects />
      <Contact />
    </PortfolioContainer>
  );
};

export default Portfolio;
